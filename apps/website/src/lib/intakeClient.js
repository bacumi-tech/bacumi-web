const configuredTimeout = Number(import.meta.env.VITE_INTAKE_TIMEOUT_MS);
const DEFAULT_TIMEOUT_MS = Number.isFinite(configuredTimeout) && configuredTimeout > 0 ? configuredTimeout : 8000;
const DEFAULT_MAX_ATTEMPTS = 2;

export class IntakeError extends Error {
  constructor(code, options = {}) {
    super(options.message || code);
    this.name = 'IntakeError';
    this.code = code;
    this.fieldErrors = options.fieldErrors || {};
    this.retryAfterSeconds = options.retryAfterSeconds ?? null;
  }
}

const wait = (milliseconds, signal) =>
  new Promise((resolve, reject) => {
    if (milliseconds <= 0) {
      resolve();
      return;
    }

    const timer = window.setTimeout(resolve, milliseconds);
    signal?.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timer);
        reject(new IntakeError('cancelled'));
      },
      { once: true }
    );
  });

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

const mapResponseError = async (response) => {
  const body = await safeJson(response);
  const fieldErrors =
    body?.errors && typeof body.errors === 'object' && !Array.isArray(body.errors)
      ? Object.fromEntries(
          Object.entries(body.errors).filter(
            ([field, code]) => typeof field === 'string' && typeof code === 'string'
          )
        )
      : {};

  if (response.status === 400) {
    return new IntakeError('validation', { fieldErrors });
  }
  if (response.status === 413) {
    return new IntakeError('too_large');
  }
  if (response.status === 415) {
    return new IntakeError('unsupported_media_type');
  }
  if (response.status === 429) {
    const retryAfter = Number.parseInt(response.headers.get('Retry-After') || '', 10);
    return new IntakeError('rate_limited', {
      fieldErrors,
      retryAfterSeconds: Number.isFinite(retryAfter) ? retryAfter : null
    });
  }
  if (response.status === 503) {
    return new IntakeError('unavailable', { fieldErrors });
  }
  return new IntakeError('unexpected_response');
};

const submit = async (endpoint, payload, options = {}) => {
  const {
    signal,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    maxAttempts = DEFAULT_MAX_ATTEMPTS,
    retryDelayMs = 150
  } = options;
  const body = JSON.stringify(payload);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    if (signal?.aborted) {
      throw new IntakeError('cancelled');
    }

    const controller = new AbortController();
    let timedOut = false;
    const abortFromCaller = () => controller.abort();
    signal?.addEventListener('abort', abortFromCaller, { once: true });
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        signal: controller.signal
      });

      if (response.status === 202) {
        const result = await safeJson(response);
        if (result?.accepted === true) {
          return { accepted: true };
        }
        throw new IntakeError('unexpected_response');
      }

      throw await mapResponseError(response);
    } catch (error) {
      if (error instanceof IntakeError && error.code !== 'timeout') {
        throw error;
      }
      if (signal?.aborted) {
        throw new IntakeError('cancelled');
      }

      const networkError = timedOut
        ? new IntakeError('timeout')
        : new IntakeError('network');
      if (attempt === maxAttempts) {
        throw networkError;
      }
      await wait(retryDelayMs, signal);
    } finally {
      window.clearTimeout(timeout);
      signal?.removeEventListener('abort', abortFromCaller);
    }
  }

  throw new IntakeError('network');
};

export const submitContact = (payload, options) => submit('/api/contact', payload, options);
export const submitPilot = (payload, options) => submit('/api/pilots', payload, options);
