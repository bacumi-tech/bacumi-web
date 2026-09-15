import React from 'react';

export const ErrorSummary = ({ errors, focusRef }) => (
  <div ref={focusRef} className="form-feedback form-feedback-error" role="alert" tabIndex="-1">
    <h2 className="text-base font-bold">Please review your submission</h2>
    <ul className="mt-2 space-y-1 text-sm">
      {Object.entries(errors).map(([field, message]) => (
        <li key={field}>
          {field === 'form' ? (
            <span className="font-semibold">{message}</span>
          ) : (
            <a href={`#${field}`} className="font-semibold underline">{message}</a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const SuccessFeedback = ({ children }) => (
  <div className="form-feedback form-feedback-success" role="status" tabIndex="-1">
    {children}
  </div>
);
