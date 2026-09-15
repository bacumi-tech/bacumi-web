import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PilotApplicationForm from './PilotApplicationForm';

const renderForm = (props) => render(<MemoryRouter><PilotApplicationForm {...props} /></MemoryRouter>);

afterEach(() => vi.unstubAllGlobals());

describe('PilotApplicationForm', () => {
  it('uses an allowlisted product preselection and ignores unknown values', () => {
    const { rerender } = renderForm({ enabled: true, initialProduct: 'pr-pulse-pro' });
    expect(screen.getByLabelText('Product').value).toBe('pr-pulse-pro');

    rerender(<MemoryRouter><PilotApplicationForm enabled initialProduct="internal-idea" /></MemoryRouter>);
    expect(screen.getByLabelText('Product').value).toBe('');
  });

  it('requires contact acknowledgement and focuses the error summary', async () => {
    renderForm({ enabled: true, initialProduct: 'voice-composer' });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'pilot@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: 'Apply for a pilot' }));

    const summary = await screen.findByRole('alert');
    expect(document.activeElement).toBe(summary);
    expect(within(summary).getByRole('link', { name: /confirm that we may contact you/i })).toBeTruthy();
    expect(
      screen.getByLabelText('You may contact me about this application').getAttribute('aria-invalid')
    ).toBe('true');
  });

  it('shows the generic pilot success state after acceptance', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('{"accepted":true}', { status: 202 }))
    );
    renderForm({ enabled: true, initialProduct: 'company-verify' });

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'pilot@example.com' } });
    fireEvent.click(screen.getByLabelText('You may contact me about this application'));
    fireEvent.click(screen.getByRole('button', { name: 'Apply for a pilot' }));

    const status = await screen.findByRole('status');
    expect(status.textContent).toContain('Applying does not guarantee access.');
  });

  it('surfaces a closed program as a field error and preserves the application', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{"errors":{"product":"product_unavailable"}}', { status: 400 })
      )
    );
    renderForm({ enabled: true, initialProduct: 'company-verify' });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'pilot@example.com' } });
    fireEvent.change(screen.getByLabelText('Use case'), { target: { value: 'Validate supplier VAT details.' } });
    fireEvent.click(screen.getByLabelText('You may contact me about this application'));
    fireEvent.click(screen.getByRole('button', { name: 'Apply for a pilot' }));

    await waitFor(() => expect(screen.getAllByText(/not accepting applications right now/i)).toHaveLength(2));
    expect(screen.getByLabelText('Use case').value).toBe('Validate supplier VAT details.');
  });

  it('translates field-aware backend length codes', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{"errors":{"company":"invalid_length"}}', { status: 400 })
      )
    );
    renderForm({ enabled: true, initialProduct: 'voice-composer' });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'pilot@example.com' } });
    fireEvent.click(screen.getByLabelText('You may contact me about this application'));

    fireEvent.click(screen.getByRole('button', { name: 'Apply for a pilot' }));

    const summary = await screen.findByRole('alert');
    expect(within(summary).getByRole('link', { name: 'Company must be 160 characters or fewer.' })).toBeTruthy();
  });
});
