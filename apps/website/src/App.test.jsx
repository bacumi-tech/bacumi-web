import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, useLocation } from 'react-router-dom';
import App from './App';
import DocsLayout from './components/docs/DocsLayout';
import { getAdjacentDocs, prPulseDocs } from './content/prPulseDocs';

const documentationRoutes = [
  ['/docs/pr-pulse', /PR Pulse Documentation/i],
  ['/docs/pr-pulse/dashboard', /Core Dashboard/i],
  ['/docs/pr-pulse/filtering-and-search', /Filtering and Search/i],
  ['/docs/pr-pulse/personal-views', /Personal Views/i],
  ['/docs/pr-pulse/pr-details', /PR Details and Quick Actions/i],
  ['/docs/pr-pulse/team-insights', /Team Insights/i]
];

const approvedProducts = ['PR Pulse', 'PR Pulse Pro', 'Company Verify'];
const hiddenProducts = ['Bacumi Governance', 'Bacumi FinOps', 'Bacumi Tempo', 'GanttFlow'];

const compatibilityRedirects = [
  {
    from: '/products/governance',
    to: '/products',
    heading: /A clear portfolio for better work outcomes/i,
    retiredProduct: 'Bacumi Governance'
  },
  {
    from: '/products/finops',
    to: '/products',
    heading: /A clear portfolio for better work outcomes/i,
    retiredProduct: 'Bacumi FinOps'
  },
  {
    from: '/products/tempo',
    to: '/products',
    heading: /A clear portfolio for better work outcomes/i,
    retiredProduct: 'Bacumi Tempo'
  },
  { from: '/docs', to: '/docs/pr-pulse', heading: /PR Pulse Documentation/i },
  { from: '/docs/pulse/dashboard', to: '/docs/pr-pulse/dashboard', heading: /Core Dashboard/i },
  {
    from: '/docs/pulse/filtering-search',
    to: '/docs/pr-pulse/filtering-and-search',
    heading: /Filtering and Search/i
  },
  { from: '/docs/pulse/personal-views', to: '/docs/pr-pulse/personal-views', heading: /Personal Views/i },
  { from: '/docs/pulse/pr-details', to: '/docs/pr-pulse/pr-details', heading: /PR Details and Quick Actions/i },
  { from: '/docs/pulse/team-insights', to: '/docs/pr-pulse/team-insights', heading: /Team Insights/i },
  { from: '/products/pr-pulse', to: '/products/pulse', heading: /PR Pulse for Azure DevOps/i }
];

const LocationProbe = () => {
  const location = useLocation();
  return <output data-testid="current-location">{location.pathname}</output>;
};

const renderApp = (initialEntry) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
      <LocationProbe />
    </MemoryRouter>
  );

describe('approved PR Pulse documentation routes', () => {
  it.each(documentationRoutes)('renders %s with its canonical heading', (path, heading) => {
    renderApp(path);

    expect(screen.getByRole('heading', { name: heading })).toBeTruthy();
  });
});

describe('approved public product portfolio', () => {
  it('shows only the approved products on the products page', () => {
    renderApp('/products');

    approvedProducts.forEach((product) => {
      expect(screen.getAllByText(product).length).toBeGreaterThan(0);
    });

    hiddenProducts.forEach((product) => {
      expect(screen.queryAllByText(product)).toHaveLength(0);
    });
  });
});

describe('compatibility redirects', () => {
  it.each(compatibilityRedirects)('redirects $from to its canonical destination', async ({ from, to, heading, retiredProduct }) => {
    renderApp(from);

    await waitFor(() => {
      expect(screen.getByTestId('current-location').textContent).toBe(to);
    });

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeTruthy();
    if (retiredProduct) {
      expect(screen.queryAllByText(retiredProduct)).toHaveLength(0);
    }
  });
});

describe('product contact calls to action', () => {
  const contactCallsToAction = [
    ['/products/pr-pulse-pro', /Help shape PR Pulse Pro/i, 'Discuss a design partnership'],
    ['/products/company-verify', /Validate the workflow with us/i, 'Join the design partner program']
  ];

  it.each(contactCallsToAction)('navigates the final %s contact CTA through the SPA', async (path, sectionHeading, linkName) => {
    renderApp(path);

    const section = screen.getByRole('heading', { name: sectionHeading }).closest('section');
    const contactLink = within(section).getByRole('link', { name: linkName });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByTestId('current-location').textContent).toBe('/contact');
    });
    expect(screen.getByRole('heading', { level: 1, name: 'Get in touch' })).toBeTruthy();
  });
});

describe('documentation shell', () => {
  it('keeps the canonical documentation order immutable and resolves boundaries safely', () => {
    expect(prPulseDocs.map((doc) => doc.label)).toEqual([
      'Introduction',
      'Core Dashboard',
      'Personal Views',
      'Team Insights',
      'Filtering and Search',
      'PR Details and Quick Actions'
    ]);
    expect(getAdjacentDocs('/docs/pr-pulse')).toEqual({ previous: null, next: prPulseDocs[1] });
    expect(getAdjacentDocs('/docs/pr-pulse/pr-details')).toEqual({ previous: prPulseDocs[4], next: null });
    expect(getAdjacentDocs('/docs/pr-pulse/unknown')).toEqual({ previous: null, next: null });
  });

  it('renders adjacent navigation and marks only the canonical current document as active', () => {
    render(
      <MemoryRouter initialEntries={['/docs/pr-pulse/dashboard']}>
        <DocsLayout>
          <h1>Core Dashboard</h1>
          <p>Dashboard documentation content.</p>
        </DocsLayout>
      </MemoryRouter>
    );

    const sidebar = screen.getByRole('navigation', { name: 'PR Pulse documentation' });
    const pagination = screen.getByRole('navigation', { name: 'Documentation pagination' });

    expect(screen.getByRole('link', { name: 'Previous: Introduction' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Next: Personal Views' })).toBeTruthy();
    expect(sidebar.querySelector('a[href="/docs/pr-pulse/dashboard"]')?.getAttribute('aria-current')).toBe('page');
    expect(sidebar.querySelector('a[href="/docs/pr-pulse"]')?.getAttribute('aria-current')).toBeNull();
    expect(pagination.querySelector('a[href="/docs/pr-pulse"]')?.textContent).toContain('Introduction');
    expect(pagination.querySelector('a[href="/docs/pr-pulse/personal-views"]')?.textContent).toContain('Personal Views');
  });
});

describe('global public truth', () => {
  it('opens the approved three-product Solutions menu without a B2C callout', () => {
    renderApp('/');

    const solutionsButton = screen.getByRole('button', { name: /Solutions/i });
    fireEvent.click(solutionsButton, { detail: 1 });

    expect(solutionsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(solutionsButton, { detail: 1 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(solutionsButton, { detail: 0 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(solutionsButton, { detail: 0 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.mouseEnter(solutionsButton);
    fireEvent.click(solutionsButton, { detail: 1 });

    expect(solutionsButton.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByRole('link', { name: /^PR PulseLive Pull Request Operations$/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /^PR Pulse ProComing Soon Engineering Flow Intelligence$/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /^Company VerifyDesign Partner Romania and VIES Verification$/i })).toBeTruthy();
    expect(screen.queryByText(/B2C/i)).toBeNull();

    fireEvent.click(solutionsButton, { detail: 1 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(solutionsButton, { detail: 1 });
    fireEvent.click(screen.getByRole('link', { name: /^PR PulseLive Pull Request Operations$/i }));
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('consumes hover ownership before a keyboard activation toggles the Solutions menu', () => {
    renderApp('/');

    const solutionsButton = screen.getByRole('button', { name: /Solutions/i });
    fireEvent.mouseEnter(solutionsButton);
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('true');

    solutionsButton.focus();
    fireEvent.click(solutionsButton, { detail: 0 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(solutionsButton, { detail: 0 });
    expect(solutionsButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('uses the canonical PR Pulse documentation route in global navigation', () => {
    renderApp('/');

    const documentationLinks = screen.getAllByRole('link', { name: /^(Docs|Documentation)$/i });

    expect(documentationLinks).toHaveLength(2);
    documentationLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/docs/pr-pulse');
    });
  });

  it('identifies the footer as a pre-incorporation Bacumi project', () => {
    renderApp('/');

    expect(screen.getByText(`© ${new Date().getFullYear()} Bacumi. All rights reserved.`)).toBeTruthy();
    expect(screen.getByText('Pre-incorporation product project')).toBeTruthy();
    expect(screen.queryByText(/Bacumi SRL/i)).toBeNull();
  });

  it('uses the canonical Trust Center route throughout the footer', () => {
    renderApp('/');

    const footer = screen.getByRole('contentinfo');
    const trustCenterLinks = within(footer).getAllByRole('link', { name: 'Trust Center' });

    expect(trustCenterLinks).toHaveLength(2);
    trustCenterLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/legal/trust');
    });
  });

  it('publishes the interim privacy identity and controller update gate', () => {
    renderApp('/legal/privacy');

    expect(screen.getByText(/Bacumi is a pre-incorporation product project operated from Romania/i)).toBeTruthy();
    expect(screen.getAllByRole('link', { name: 'support@bacumi.com' }).length).toBeGreaterThan(0);
    expect(
      screen.getByText(
        /legal and controller details will be updated at incorporation and before server-side customer-data collection or commercial contracting/i
      )
    ).toBeTruthy();
  });
});
