import React from 'react';

const FormField = ({ id, label, error, hint, required = false, children }) => {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(' ') || undefined;

  return (
    <div className="form-field">
      <label htmlFor={id} className={`form-label${required ? ' form-label-required' : ''}`}>
        {label}
      </label>
      {hint ? <p id={`${id}-hint`} className="form-hint">{hint}</p> : null}
      {React.cloneElement(children, {
        id,
        'aria-describedby': describedBy,
        'aria-invalid': error ? 'true' : undefined,
        className: `${children.props.className || ''} form-control`.trim()
      })}
      {error ? <p id={`${id}-error`} className="form-error">{error}</p> : null}
    </div>
  );
};

export default FormField;
