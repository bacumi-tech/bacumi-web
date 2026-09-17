import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, useLocation } from 'react-router-dom';
import App from './App';
import DocsLayout from './components/docs/DocsLayout';
import { getAdjacentDocs, prPulseDocs } from './content/prPulseDocs';
import {
  getAdjacentVoiceComposerDocs,
  voiceComposerDocs
} from './content/macAppDocs';

const macAppDocumentationRoutes = [
  ['/docs/voice-composer', /Voice Composer Documentation/i],
  ['/docs/voice-composer/getting-started', /Getting Started/i],
  ['/docs/voice-composer/dictation-workflow', /Dictation Workflow/i],
  ['/docs/voice-composer/settings', /Settings & Menu Bar/i],
  ['/docs/voice-composer/privacy', /Privacy & Local Processing/i]
];

const documentationRoutes = [
  ['/docs', /Bacumi Documentation/i],
  ['/docs/pr-pulse', /PR Pulse Documentation/i],
  ['/docs/pr-pulse/dashboard', /Core Dashboard/i],
  ['/docs/pr-pulse/filtering-and-search', /Filtering and Search/i],
  ['/docs/pr-pulse/personal-views', /Personal Views/i],
  ['/docs/pr-pulse/pr-details', /PR Details and Quick Actions/i],
  ['/docs/pr-pulse/team-insights', /Team Insights/i],
  ['/docs/treefold', /Treefold Documentation/i],
  ['/docs/tagfold', /Tagfold Documentation/i],
  ...macAppDocumentationRoutes
];

const approvedProducts = ['PR Pulse', 'Treefold', 'Tagfold', 'PR Pulse Pro', 'Company Verify'];
const hiddenDesktopApps = [
  'Matchfold',
  'SizeTree',
  'Coverlay',
  'DataDock',
  'Doc Lens',
  'TalkFold',
  'Developer Scratchpad',
  'SureCopy',
  'ImageTo'
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
  { from: '/docs', to: '/docs', heading: /Bacumi Documentation/i },
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
  return <output data-testid="current-location">{location.pathname}{location.search}</output>;
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

  it('publishes only Voice Composer from the desktop catalogue', () => {
    renderApp('/products/desktop-apps');

    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('heading', { name: 'Voice Composer' }).length).toBeGreaterThan(0);
    hiddenDesktopApps.forEach((product) => {
      expect(within(main).queryByText(product)).toBeNull();
    });
    expect(within(main).getAllByText('In Development').length).toBeGreaterThan(0);
    expect(within(main).getAllByText(/Mac App Store and direct\/MDM/i).length).toBeGreaterThan(0);
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
    ['/products/pr-pulse-pro', /Help shape PR Pulse Pro/i, 'Apply for early access', '/pilots?product=pr-pulse-pro'],
    ['/products/company-verify', /Validate the workflow with us/i, 'Apply as a design partner', '/pilots?product=company-verify']
  ];

  it.each(contactCallsToAction)('preselects the matching program from the final %s CTA', async (path, sectionHeading, linkName, destination) => {
    renderApp(path);

    const section = screen.getByRole('heading', { name: sectionHeading }).closest('section');
    const contactLink = within(section).getByRole('link', { name: linkName });
    fireEvent.click(contactLink);

    await waitFor(() => {
      expect(screen.getByTestId('current-location').textContent).toBe(destination);
    });
    expect(screen.getByRole('heading', { level: 1, name: 'Apply for a Bacumi pilot' })).toBeTruthy();
    expect(screen.getByLabelText('Product').value).toBe(destination.split('=').at(-1));
  });
});

describe('coming soon extension calls to action', () => {
  it.each([
    ['/products/treefold'],
    ['/products/tagfold']
  ])('%s links to contact while the extension is not on the Marketplace', async (path) => {
    renderApp(path);

    const section = screen.getByRole('heading', { name: /Coming soon to the Visual Studio Marketplace/i }).closest('section');
    fireEvent.click(within(section).getByRole('link', { name: 'Contact Bacumi' }));

    await waitFor(() => {
      expect(screen.getByTestId('current-location').textContent).toBe('/contact');
    });
  });
});

describe('website intake routes', () => {
  it('renders the working contact form in local test builds', () => {
    renderApp('/contact');

    expect(screen.getByRole('heading', { level: 1, name: 'Contact Bacumi' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Send message' })).toBeTruthy();
  });

  it('ignores an unknown pilot preselection', () => {
    renderApp('/pilots?product=internal-idea');

    expect(screen.getByLabelText('Product').value).toBe('');
  });

  it('renders a useful application-level not-found page', () => {
    renderApp('/missing-page');

    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Back to home' }).getAttribute('href')).toBe('/');
  });

  it('updates page metadata for a direct pilot route', () => {
    renderApp('/pilots?product=voice-composer');

    expect(document.title).toBe('Pilot Applications | Bacumi');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://bacumi.com/pilots'
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://bacumi.com/pilots'
    );
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
      'Pilot Applications | Bacumi'
    );
    expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe(
      'Apply for consideration for a Bacumi product pilot or design-partner program.'
    );
  });
});

describe('documentation shell', () => {
  it('keeps mac app documentation order immutable and resolves boundaries safely', () => {
    expect(voiceComposerDocs.map((doc) => doc.label)).toEqual([
      'Introduction',
      'Getting Started',
      'Dictation Workflow',
      'Settings & Menu Bar',
      'Privacy & Local Processing'
    ]);
    expect(getAdjacentVoiceComposerDocs('/docs/voice-composer')).toEqual({
      previous: null,
      next: voiceComposerDocs[1]
    });
  });

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

describe('coming-soon Azure DevOps extensions', () => {
  it.each([
    ['/products/treefold', 'Treefold for Azure DevOps'],
    ['/products/tagfold', 'Tagfold for Azure DevOps'],
    ['/docs/treefold', 'Treefold Documentation'],
    ['/docs/tagfold', 'Tagfold Documentation']
  ])('does not link %s to an unpublished Marketplace listing', (path, heading) => {
    renderApp(path);

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeTruthy();
    expect(screen.getAllByText(/Coming soon to the Visual Studio Marketplace/i).length).toBeGreaterThan(0);
    const marketplaceLinks = screen
      .queryAllByRole('link')
      .filter((link) => (link.getAttribute('href') ?? '').includes('marketplace.visualstudio.com'));
    expect(marketplaceLinks).toHaveLength(0);
  });

  it('renders extension documentation in its own sidebar without PR Pulse navigation', () => {
    renderApp('/docs/treefold');

    const sidebar = screen.getByRole('navigation', { name: 'Treefold documentation' });
    expect(sidebar.querySelector('a[href="/docs/treefold"]')?.getAttribute('aria-current')).toBe('page');
    expect(screen.queryByRole('navigation', { name: 'PR Pulse documentation' })).toBeNull();
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
    expect(screen.getByRole('link', { name: 'Bacumi Desktop Apps Native Mac apps' })).toBeTruthy();

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

  it('returns focus to the mobile menu button when Escape closes the menu', () => {
    renderApp('/');

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' });
    fireEvent.click(menuButton);
    expect(menuButton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(menuButton);
  });

  it('uses the documentation hub route in global navigation', () => {
    renderApp('/');

    const documentationLinks = screen.getAllByRole('link', { name: /^(Docs|Documentation)$/i });

    expect(documentationLinks.length).toBeGreaterThanOrEqual(2);
    documentationLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/docs');
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

  it('describes Azure DevOps extension data handling in the privacy policy', () => {
    renderApp('/legal/privacy');

    expect(screen.getByRole('heading', { name: /Azure DevOps extensions/i })).toBeTruthy();
    expect(screen.getByText(/do not collect usage analytics or telemetry/i)).toBeTruthy();
    expect(screen.getByText(/does not receive pull request, work item, query, or tag data/i)).toBeTruthy();
  });

  it('does not claim PR Pulse collects analytics', () => {
    renderApp('/docs/pr-pulse');

    expect(screen.getByText(/PR Pulse does not collect usage analytics/i)).toBeTruthy();
    expect(screen.queryByText(/Optional analytics/i)).toBeNull();
  });
});
