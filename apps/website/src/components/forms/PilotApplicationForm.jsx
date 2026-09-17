import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../../content/siteCopy';
import { getPilotProgram, pilotPrograms } from '../../content/pilotPrograms';
import { submitPilot } from '../../lib/intakeClient';
import FormField from './FormField';
import { ErrorSummary, SuccessFeedback } from './SubmissionFeedback';
import {
  createRequestId,
  emailIsValid,
  formErrorMessage,
  mapServerFieldErrors,
  messageForCode
} from './formSupport';

const platforms = [
  ['macos', 'macOS'],
  ['windows', 'Windows'],
  ['linux', 'Linux'],
  ['not-applicable', 'Not applicable']
];

const getInitialValues = (initialProduct) => ({
  email: '',
  name: '',
  product: getPilotProgram(initialProduct)?.id || '',
  company: '',
  platform: 'not-applicable',
  useCase: '',
  contactPermission: false,
  website: ''
});

const validate = (values) => {
  const errors = {};
  const email = values.email.trim();
  if (!email) errors.email = messageForCode('email_required');
  else if (!emailIsValid(email)) errors.email = messageForCode('email_invalid');
  if (!getPilotProgram(values.product)) errors.product = messageForCode('product_required');
  if (values.name.trim().length > 100) errors.name = messageForCode('name_too_long');
  if (values.company.trim().length > 160) errors.company = messageForCode('company_too_long');
  if (!platforms.some(([value]) => value === values.platform)) {
    errors.platform = messageForCode('platform_invalid');
  }
  if (values.useCase.trim().length > 1500) errors.useCase = messageForCode('use_case_too_long');
  if (!values.contactPermission) {
    errors.contactPermission = messageForCode('contact_permission_required');
  }
  return errors;
};

const PilotApplicationFormFields = ({ enabled, initialProduct }) => {
  const [values, setValues] = useState(() => getInitialValues(initialProduct));
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const requestRef = useRef(null);
  const submittingRef = useRef(false);
  const summaryRef = useRef(null);

  useEffect(() => {
    if (Object.keys(errors).length > 0) summaryRef.current?.focus();
  }, [errors]);

  if (!enabled) {
    return (
      <div className="form-unavailable">
        <h2 className="text-xl font-bold">Pilot applications are temporarily unavailable</h2>
        <p className="mt-2 text-body">You can still tell us about your interest by email.</p>
        <a href={`mailto:${contacts.sales}`} className="btn-secondary mt-5 h-11 px-5 text-sm">
          Email {contacts.sales}
        </a>
      </div>
    );
  }

  if (succeeded) {
    return (
      <SuccessFeedback>
        <h2 className="text-xl font-bold">Thanks for your interest.</h2>
        <p className="mt-2 text-sm">
          We review applications and will contact you if there is a suitable pilot. Applying does not guarantee access.
        </p>
      </SuccessFeedback>
    );
  }

  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => {
      if (!current[name] && !current.form) return current;
      const next = { ...current };
      delete next[name];
      delete next.form;
      return next;
    });
    setServerMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const normalized = {
      email: values.email.trim(),
      name: values.name.trim(),
      product: values.product,
      company: values.company.trim(),
      platform: values.platform,
      useCase: values.useCase.trim(),
      contactPermission: values.contactPermission,
      website: values.website
    };
    const signature = JSON.stringify(normalized);
    if (requestRef.current?.signature !== signature) {
      requestRef.current = { signature, requestId: createRequestId() };
    }
    const payload = { requestId: requestRef.current.requestId, ...normalized };

    submittingRef.current = true;
    setSubmitting(true);
    setErrors({});
    setServerMessage('');
    try {
      await submitPilot(payload);
      requestRef.current = null;
      setSucceeded(true);
    } catch (error) {
      const fieldErrors = error.code === 'validation'
        ? mapServerFieldErrors(
          error.fieldErrors,
          ['email', 'name', 'product', 'company', 'platform', 'useCase', 'contactPermission']
        )
        : {};
      if (Object.keys(fieldErrors).length > 0) setErrors(fieldErrors);
      else setErrors({ form: formErrorMessage(error, 'application') });
      setServerMessage(formErrorMessage(error, 'application'));
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  return (
    <form className="intake-form" onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 ? <ErrorSummary errors={errors} focusRef={summaryRef} /> : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="email" label="Email" error={errors.email} required>
          <input name="email" type="email" autoComplete="email" maxLength="254" value={values.email} onChange={update} />
        </FormField>
        <FormField id="name" label="Name" error={errors.name}>
          <input name="name" type="text" autoComplete="name" maxLength="100" value={values.name} onChange={update} />
        </FormField>
        <FormField id="product" label="Product" error={errors.product} required>
          <select name="product" value={values.product} onChange={update}>
            <option value="">Choose a product</option>
            {pilotPrograms.map((program) => (
              <option key={program.id} value={program.id} disabled={!program.available}>{program.label}</option>
            ))}
          </select>
        </FormField>
        <FormField id="company" label="Company" error={errors.company} hint="Optional">
          <input name="company" type="text" autoComplete="organization" maxLength="160" value={values.company} onChange={update} />
        </FormField>
        <FormField id="platform" label="Platform" error={errors.platform} hint="Optional">
          <select name="platform" value={values.platform} onChange={update}>
            {platforms.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </FormField>
      </div>
      <FormField id="useCase" label="Use case" error={errors.useCase} hint="Optional · up to 1,500 characters">
        <textarea name="useCase" rows="6" maxLength="1500" value={values.useCase} onChange={update} />
      </FormField>
      <div className="form-checkbox-row">
        <input
          id="contactPermission"
          name="contactPermission"
          type="checkbox"
          checked={values.contactPermission}
          onChange={update}
          aria-invalid={errors.contactPermission ? 'true' : undefined}
          aria-describedby={errors.contactPermission ? 'contactPermission-error' : undefined}
        />
        <div>
          <label htmlFor="contactPermission" className="form-label">
            You may contact me about this application
          </label>
          <p className="form-hint">This permission covers this application only. It is not marketing consent.</p>
          {errors.contactPermission ? (
            <p id="contactPermission-error" className="form-error">{errors.contactPermission}</p>
          ) : null}
        </div>
      </div>
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex="-1" autoComplete="off" value={values.website} onChange={update} />
      </div>
      <div className="flex flex-col gap-3 border-t border-surface-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary h-12 px-7 text-sm" disabled={submitting}>
          {submitting ? 'Applying…' : serverMessage ? 'Try again' : 'Apply for a pilot'}
        </button>
        <a
          href={`mailto:${contacts.sales}?subject=${encodeURIComponent('Bacumi pilot interest')}`}
          className="text-sm font-semibold text-primary"
        >
          Apply by email
        </a>
      </div>
      <p className="text-xs leading-relaxed text-muted">
        Applications are reviewed manually. See our <Link to="/legal/privacy" className="font-semibold text-primary">Privacy Policy</Link> for how we handle this information.
      </p>
    </form>
  );
};

const PilotApplicationForm = ({
  enabled = import.meta.env.VITE_INTAKE_ENABLED === 'true',
  initialProduct = ''
}) => {
  const selectedProduct = getPilotProgram(initialProduct)?.id || '';
  return (
    <PilotApplicationFormFields
      key={selectedProduct}
      enabled={enabled}
      initialProduct={selectedProduct}
    />
  );
};

export default PilotApplicationForm;
