import { afterEach, describe, expect, it, vi } from 'vitest';
import { IntakeError, submitContact, submitPilot } from './intakeClient';

const acceptedResponse = () =>
  new Response('{"accepted":true}', {
    status: 202,
    headers: { 'Content-Type': 'application/json' }
  });

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('intake client', () => {
  it('retries an ambiguous network failure with the same UUID and payload', async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new TypeError('network failed'))
      .mockResolvedValueOnce(acceptedResponse());
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      submitContact(
        {
          requestId: '11111111-1111-4111-8111-111111111111',
          email: 'person@example.com',
          name: '',
          category: 'support',
          product: '',
          message: 'Please help with this account.',
          website: ''
        },
        { retryDelayMs: 0 }
      )
    ).resolves.toEqual({ accepted: true });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0][0]).toBe('/api/contact');
    expect(fetchMock.mock.calls[0][1].body).toBe(fetchMock.mock.calls[1][1].body);
  });

  it('maps safe field errors without echoing response payloads', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{"errors":{"product":"product_unavailable","email":"invalid_email"}}', {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );

    const error = await submitPilot({
      requestId: '22222222-2222-4222-8222-222222222222',
      email: 'bad',
      name: '',
      product: 'voice-composer',
      company: '',
      platform: 'not-applicable',
      useCase: '',
      contactPermission: true,
      website: ''
    }).catch((caught) => caught);

    expect(error).toBeInstanceOf(IntakeError);
    expect(error.code).toBe('validation');
    expect(error.fieldErrors).toEqual({ product: 'product_unavailable', email: 'invalid_email' });
  });

  it('reports a retry delay for throttled requests', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{"errors":{"form":"rate_limited"}}', {
          status: 429,
          headers: { 'Content-Type': 'application/json', 'Retry-After': '45' }
        })
      )
    );

    const error = await submitContact({ requestId: 'id' }).catch((caught) => caught);
    expect(error).toMatchObject({ code: 'rate_limited', retryAfterSeconds: 45 });
  });

  it('aborts a timed-out request and reports a recoverable timeout', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((_url, { signal }) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
        })
      )
    );

    const error = await submitContact({ requestId: 'id' }, { timeoutMs: 5, maxAttempts: 1 }).catch(
      (caught) => caught
    );

    expect(error).toMatchObject({ code: 'timeout' });
  });
});
