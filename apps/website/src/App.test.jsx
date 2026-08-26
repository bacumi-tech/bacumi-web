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
const plannedDesktopApps = [
  'Voice Composer',
  'Screenshot Search',
  'Audio Inbox',
  'Clipboard Intelligence',
  'Semantic File Search',
  'Workspace Manager',
  'Developer Scratchpad',
  'Menu Bar Automations',
  'Smart File Renamer',
  'Drop Zone / File Converter'
];
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
  it('presents business software and desktop apps as separate Bacumi product lines', () => {
    renderApp('/products');

    expect(screen.getByRole('heading', { name: 'Bacumi Business Software' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Bacumi Desktop Apps' })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Explore business software/i }).getAttribute('href')).toBe(
      '/products/business-software'
    );
    expect(screen.getByRole('link', { name: /Explore desktop apps/i }).getAttribute('href')).toBe(
      '/products/desktop-apps'
    );
  });

  it('keeps the business software portfolio bounded to approved public products', () => {
    renderApp('/products/business-software');

    approvedProducts.forEach((product) => expect(screen.getAllByText(product).length).toBeGreaterThan(0));

    hiddenProducts.forEach((product) => {
      expect(screen.queryAllByText(product)).toHaveLength(0);
    });
  });

  it('lists ten macOS-first desktop apps with Coming Soon status and interactive details toggle', () => {
    renderApp('/products/desktop-apps');

    const main = screen.getByRole('main');
    plannedDesktopApps.forEach((product) => {
      expect(within(main).getByRole('heading', { name: product })).toBeTruthy();
    });
    expect(within(main).getAllByText('Coming Soon')).toHaveLength(10);
    expect(within(main).getByText(/macOS first/i)).toBeTruthy();
    expect(within(main).getByText(/individuals and organizations/i)).toBeTruthy();
    expect(within(main).getByText(/Windows versions may be considered in the future/i)).toBeTruthy();

    // Before clicking details, extended App Store button is not visible and card is 1 column
    expect(within(main).queryByText('Mac App Store')).toBeNull();
    const voiceComposerArticle = within(main).getByRole('heading', { name: 'Voice Composer' }).closest('article');
    expect(voiceComposerArticle.className).toContain('col-span-1');

    // Click Details on Voice Composer
    const detailsButton = within(voiceComposerArticle).getByRole('button', { name: /Details/i });
    fireEvent.click(detailsButton);

    // After clicking details, card expands horizontally (col-span-2), vertically, and shows Mac App Store button
    expect(voiceComposerArticle.className).toContain('md:col-span-2');
    expect(within(voiceComposerArticle).getByText(/Fast, local-first dictation utility/i)).toBeTruthy();
    expect(within(voiceComposerArticle).getByText('Mac App Store')).toBeTruthy();
    expect(within(voiceComposerArticle).getByRole('button', { name: /Less details/i })).toBeTruthy();

    // Click Less details to collapse
    fireEvent.click(within(voiceComposerArticle).getByRole('button', { name: /Less details/i }));
    expect(within(voiceComposerArticle).queryByText('Mac App Store')).toBeNull();
    expect(voiceComposerArticle.className).toContain('col-span-1');
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
  it('opens the two-line Products menu', () => {
    renderApp('/');

    const productsButton = screen.getByRole('button', { name: /Products/i });
    fireEvent.click(productsButton, { detail: 1 });

    expect(productsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(productsButton, { detail: 1 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(productsButton, { detail: 0 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(productsButton, { detail: 0 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.mouseEnter(productsButton);
    fireEvent.click(productsButton, { detail: 1 });

    expect(productsButton.getAttribute('aria-expanded')).toBe('true');
    expect(screen.getByRole('link', { name: 'Bacumi Business Software For operational workflows' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Bacumi Desktop Apps macOS first' })).toBeTruthy();

    fireEvent.click(productsButton, { detail: 1 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(productsButton, { detail: 1 });
    fireEvent.click(screen.getByRole('link', { name: 'Bacumi Business Software For operational workflows' }));
    expect(productsButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('consumes hover ownership before a keyboard activation toggles the Products menu', () => {
    renderApp('/');

    const productsButton = screen.getByRole('button', { name: /Products/i });
    fireEvent.mouseEnter(productsButton);
    expect(productsButton.getAttribute('aria-expanded')).toBe('true');

    productsButton.focus();
    fireEvent.click(productsButton, { detail: 0 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(productsButton, { detail: 0 });
    expect(productsButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('uses the canonical PR Pulse documentation route in global navigation', () => {
    renderApp('/');

    const documentationLinks = screen.getAllByRole('link', { name: /^(Docs|Documentation)$/i });

    expect(documentationLinks).toHaveLength(2);
    documentationLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/docs/pr-pulse');
    });
  });

  it('identifies Bacumi SRL as the legal owner in the footer', () => {
    renderApp('/');

    expect(screen.getByText(`© ${new Date().getFullYear()} Bacumi SRL. All rights reserved.`)).toBeTruthy();
    expect(screen.getByText('Software company based in Romania, European Union')).toBeTruthy();
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

  it('publishes Bacumi SRL as the privacy controller without inventing registration details', () => {
    renderApp('/legal/privacy');

    expect(screen.getByText(/Bacumi SRL is the data controller for this website/i)).toBeTruthy();
    expect(screen.getAllByRole('link', { name: 'support@bacumi.com' }).length).toBeGreaterThan(0);
    expect(screen.queryByText(/pre-incorporation|updated at incorporation/i)).toBeNull();
  });
});
