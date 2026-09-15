export const createRequestId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

export const emailIsValid = (email) =>
  email.length <= 254 && !/[\r\n]/.test(email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const fieldMessages = {
  email_required: 'Email is required.',
  email_invalid: 'Enter a valid email address.',
  category_required: 'Choose a category.',
  category_invalid: 'Choose a valid category.',
  message_required: 'Message is required.',
  message_too_short: 'Message must be at least 10 characters.',
  message_too_long: 'Message must be 4,000 characters or fewer.',
  name_too_long: 'Name must be 100 characters or fewer.',
  company_too_long: 'Company must be 160 characters or fewer.',
  product_required: 'Choose a product.',
  product_invalid: 'Choose a valid product.',
  product_unavailable: 'This program is not accepting applications right now.',
  platform_invalid: 'Choose a valid platform.',
  use_case_too_long: 'Use case must be 1,500 characters or fewer.',
  contact_permission_required: 'Confirm that we may contact you about this application.',
  request_id_invalid: 'Please try submitting again.'
};

const requiredMessages = {
  email: 'Email is required.',
  category: 'Choose a category.',
  message: 'Message is required.',
  product: 'Choose a product.',
  contactPermission: 'Confirm that we may contact you about this application.'
};

const lengthMessages = {
  email: 'Email must be 254 characters or fewer.',
  name: 'Name must be 100 characters or fewer.',
  company: 'Company must be 160 characters or fewer.',
  message: 'Message must be between 10 and 4,000 characters.',
  useCase: 'Use case must be 1,500 characters or fewer.'
};

const valueMessages = {
  category: 'Choose a valid category.',
  platform: 'Choose a valid platform.',
  contactPermission: 'Confirm that we may contact you about this application.'
};

export const messageForCode = (code, field) => {
  if (code === 'required') return requiredMessages[field] || 'Complete this field.';
  if (code === 'invalid_length') return lengthMessages[field] || 'Check the length of this field.';
  if (code === 'invalid_value') return valueMessages[field] || 'Choose a valid value.';
  if (code === 'invalid_email') return 'Enter a valid email address.';
  if (code === 'invalid_product') return 'Choose a valid product.';
  if (code === 'invalid_request') return 'Review the form and send it again.';
  if (code === 'request_conflict') return 'This submission changed while it was being retried. Review it and send it again.';
  return fieldMessages[code] || 'Review this field and try again.';
};

export const mapServerFieldErrors = (fieldErrors, visibleFields) =>
  Object.fromEntries(
    Object.entries(fieldErrors || {}).map(([field, code]) => {
      const target = visibleFields.includes(field) ? field : 'form';
      return [target, messageForCode(code, field)];
    })
  );

export const formErrorMessage = (error, subject) => {
  if (error.code === 'rate_limited') {
    return error.retryAfterSeconds
      ? `Too many requests were sent. Please wait ${error.retryAfterSeconds} seconds and try again.`
      : 'Too many requests were sent. Please wait and try again.';
  }
  if (error.code === 'timeout') {
    return `The request took too long. Your ${subject} is still here, so you can try again.`;
  }
  if (error.code === 'too_large') {
    return `This ${subject} is too large to send. Shorten it and try again.`;
  }
  return `We could not receive your ${subject} right now. Your text is still here, so you can try again or use email.`;
};
