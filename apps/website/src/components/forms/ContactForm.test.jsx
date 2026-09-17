import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ContactForm from './ContactForm';

const renderForm = (props) => render(<MemoryRouter><ContactForm {...props} /></MemoryRouter>);

const fillValidContact = () => {
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'person@example.com' } });
  fireEvent.change(screen.getByLabelText('Category'), { target: { value: 'support' } });
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'I need help with my PR Pulse installation.' }
  });
};

afterEach(() => vi.unstubAllGlobals());

describe('ContactForm', () => {
  it('focuses an accessible error summary and identifies required fields', async () => {
    renderForm({ enabled: true });

    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

    const summary = await screen.findByRole('alert');
    expect(document.activeElement).toBe(summary);
    expect(within(summary).getByRole('link', { name: /Email is required/i })).toBeTruthy();
    expect(screen.getByLabelText('Message').getAttribute('aria-invalid')).toBe('true');
  });

  it('prevents duplicate clicks and shows durable receipt success', async () => {
    let resolveRequest;
    const fetchMock = vi.fn().mockImplementation(
      () => new Promise((resolve) => {
        resolveRequest = resolve;
      })
    );
    vi.stubGlobal('fetch', fetchMock);
    renderForm({ enabled: true });
    fillValidContact();

    const submit = screen.getByRole('button', { name: 'Send message' });
    fireEvent.click(submit);
    fireEvent.click(submit);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Sending…' }).disabled).toBe(true);

    resolveRequest(new Response('{"accepted":true}', { status: 202 }));
    expect((await screen.findByRole('status')).textContent).toContain('Thanks — your message has been received.');
  });

  it('keeps entered text and reuses the request ID after a recoverable server failure', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('{"errors":{"form":"unavailable"}}', { status: 503 }))
      .mockResolvedValueOnce(new Response('{"accepted":true}', { status: 202 }));
    vi.stubGlobal('fetch', fetchMock);
    renderForm({ enabled: true });
    fillValidContact();

    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
    expect((await screen.findByRole('alert')).textContent).toMatch(/could not receive your message/i);
    expect(screen.getByLabelText('Message').value).toBe('I need help with my PR Pulse installation.');

    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    await screen.findByText('Thanks — your message has been received.');

    const first = JSON.parse(fetchMock.mock.calls[0][1].body);
    const second = JSON.parse(fetchMock.mock.calls[1][1].body);
    expect(second.requestId).toBe(first.requestId);
    expect(second).toEqual(first);
  });

  it('translates backend validation codes for the affected field', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{"errors":{"email":"invalid_email"}}', { status: 400 })
      )
    );
    renderForm({ enabled: true });
    fillValidContact();

    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

    const summary = await screen.findByRole('alert');
    expect(within(summary).getByRole('link', { name: 'Enter a valid email address.' })).toBeTruthy();
    expect(screen.getByLabelText('Email').getAttribute('aria-invalid')).toBe('true');
  });

  it('shows a clear fallback when collection is disabled', () => {
    renderForm({ enabled: false });

    expect(screen.queryByRole('button', { name: 'Send message' })).toBeNull();
    expect(screen.getByRole('link', { name: /email support@bacumi.com/i }).getAttribute('href')).toBe(
      'mailto:support@bacumi.com'
    );
  });
});
