import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContact } from '../../lib/intakeClient';
import { contacts } from '../../content/siteCopy';
import FormField from './FormField';
import { ErrorSummary, SuccessFeedback } from './SubmissionFeedback';
import {
  createRequestId,
  emailIsValid,
  formErrorMessage,
  mapServerFieldErrors,
  messageForCode
} from './formSupport';

const categories = [
  ['sales', 'Sales'],
  ['support', 'Support'],
  ['partnership', 'Partnership'],
  ['other', 'Other']
];

const products = [
  ['pr-pulse', 'PR Pulse'],
  ['pr-pulse-pro', 'PR Pulse Pro'],
  ['company-verify', 'Company Verify'],
  ['voice-composer', 'Voice Composer']
];

const initialValues = {
  email: '',
  name: '',
  category: '',
  product: '',
  message: '',
  website: ''
};

const validate = (values) => {
  const errors = {};
  const email = values.email.trim();
  const message = values.message.trim();

  if (!email) errors.email = messageForCode('email_required');
  else if (!emailIsValid(email)) errors.email = messageForCode('email_invalid');
  if (!categories.some(([value]) => value === values.category)) {
    errors.category = messageForCode(values.category ? 'category_invalid' : 'category_required');
  }
  if (!message) errors.message = messageForCode('message_required');
  else if (message.length < 10) errors.message = messageForCode('message_too_short');
  else if (message.length > 4000) errors.message = messageForCode('message_too_long');
  if (values.name.trim().length > 100) errors.name = messageForCode('name_too_long');
  if (values.product && !products.some(([value]) => value === values.product)) {
    errors.product = messageForCode('product_invalid');
  }
  return errors;
};

const ContactForm = ({ enabled = import.meta.env.VITE_INTAKE_ENABLED === 'true' }) => {
  const [values, setValues] = useState(initialValues);
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

  const fallbackHref = useMemo(
    () => `mailto:${contacts.support}?subject=${encodeURIComponent('Bacumi website enquiry')}`,
    []
  );

  if (!enabled) {
    return (
      <div className="form-unavailable">
        <h2 className="text-xl font-bold">Online messages are temporarily unavailable</h2>
        <p className="mt-2 text-body">You can still reach us directly and we will respond when we can.</p>
        <a href={`mailto:${contacts.support}`} className="btn-secondary mt-5 h-11 px-5 text-sm">
          Email {contacts.support}
        </a>
      </div>
    );
  }

  if (succeeded) {
    return (
      <SuccessFeedback>
        <h2 className="text-xl font-bold">Thanks — your message has been received.</h2>
        <p className="mt-2 text-sm">We will review it and follow up when a response is needed.</p>
      </SuccessFeedback>
    );
  }

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
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
      category: values.category,
      product: values.product,
      message: values.message.trim(),
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
      await submitContact(payload);
      requestRef.current = null;
      setSucceeded(true);
    } catch (error) {
      const fieldErrors = error.code === 'validation'
        ? mapServerFieldErrors(
          error.fieldErrors,
          ['email', 'name', 'category', 'product', 'message']
        )
        : {};
      if (Object.keys(fieldErrors).length > 0) setErrors(fieldErrors);
      else setErrors({ form: formErrorMessage(error, 'message') });
      setServerMessage(formErrorMessage(error, 'message'));
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
        <FormField id="category" label="Category" error={errors.category} required>
          <select name="category" value={values.category} onChange={update}>
            <option value="">Choose a category</option>
            {categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </FormField>
        <FormField id="product" label="Product" error={errors.product} hint="Optional">
          <select name="product" value={values.product} onChange={update}>
            <option value="">No specific product</option>
            {products.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </FormField>
      </div>
      <FormField id="message" label="Message" error={errors.message} hint="10–4,000 characters" required>
        <textarea name="message" rows="7" maxLength="4000" value={values.message} onChange={update} />
      </FormField>
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex="-1" autoComplete="off" value={values.website} onChange={update} />
      </div>
      <div className="flex flex-col gap-3 border-t border-surface-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary h-12 px-7 text-sm" disabled={submitting}>
          {submitting ? 'Sending…' : serverMessage ? 'Try again' : 'Send message'}
        </button>
        <p className="text-sm text-muted">
          Prefer email? <a href={fallbackHref} className="font-semibold text-primary">Write to {contacts.support}</a>
        </p>
      </div>
      <p className="text-xs leading-relaxed text-muted">
        By sending this message, you acknowledge our <Link to="/legal/privacy" className="font-semibold text-primary">Privacy Policy</Link>.
      </p>
    </form>
  );
};

export default ContactForm;
