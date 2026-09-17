import React from 'react';
import { AlertTriangle, BarChart3, ClipboardCopy, FileBarChart, Settings2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';

const capabilities = [
  {
    icon: <FileBarChart size={20} className="text-primary" />,
    title: 'Fixed reports',
    description: 'Planned weekly review and retrospective reports over complete days, with period comparisons.'
  },
  {
    icon: <BarChart3 size={20} className="text-primary" />,
    title: 'Flow metrics',
    description: 'Planned PR cycle time, first-review latency, and the split from creation to first review, approval, and merge, with published definitions.'
  },
  {
    icon: <AlertTriangle size={20} className="text-primary" />,
    title: 'Attention signals',
    description: 'Pull requests waiting on review past a threshold, changes requested with no update, and long-failing checks, listed by team. No ranking of people.'
  },
  {
    icon: <TrendingUp size={20} className="text-primary" />,
    title: 'Trends',
    description: 'A rolling trend window built from weekly aggregate snapshots stored in your Azure DevOps organization.'
  },
  {
    icon: <Settings2 size={20} className="text-primary" />,
    title: 'Thresholds and team scoping',
    description: 'Configurable stale thresholds and team scoping in an organization settings page.'
  },
  {
    icon: <ClipboardCopy size={20} className="text-primary" />,
    title: 'Exports and Copy for Teams',
    description: 'CSV export, copy, browser print, and "Copy for Teams" to paste a summary into Microsoft Teams.'
  }
];

const ProductPulsePro = () => (
  <div className="page-shell pt-2">
    <ProductHero
      kicker="Coming soon"
      title={
        <>
          PR Pulse <span className="text-primary">Pro</span>
        </>
      }
      subtitle="A planned paid upgrade to PR Pulse with weekly reports, flow metrics, and attention signals, designed to run in your browser without a Bacumi backend. It is not currently available."
      cta={{
        text: 'Discuss a design partnership',
        link: '/contact',
        secondary: {
          text: 'Explore solutions',
          link: '/solutions'
        }
      }}
      preview={
        <div className="grid gap-4 p-6 md:grid-cols-3">
          {[
            ['Weekly', 'Planned review report'],
            ['Cycle time', 'Planned flow metric'],
            ['In browser', 'Planned, no Bacumi backend']
          ].map(([value, label]) => (
            <div key={label} className="surface-card p-5 text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      }
    />

    <section className="layout-container mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-chip">Bounded MVP</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">The first Pro scope</h2>
        <p className="mt-4 text-lg text-slate-600">
          These capabilities describe the planned scope we intend to validate with design partners. None of them are available today.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <article key={capability.title} className="surface-card p-6">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">{capability.icon}</div>
            <h3 className="text-xl font-bold">{capability.title}</h3>
            <p className="mt-3 text-slate-600">{capability.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block p-7 md:p-9">
        <h2 className="text-2xl font-bold md:text-3xl">Designed without a Bacumi backend</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
          {[
            'Reports are designed to be computed in your browser, inside the extension, with the read-only vso.code scope.',
            'Report caches and weekly aggregate snapshots are planned to live in Azure DevOps extension data storage in your organization.',
            'Pro is planned to unlock with an organization licence key verified inside the extension, with no server entitlement check.',
            'An optional Teams digest would run in your own Azure Pipelines and post to your own Teams webhook; it is built only if early users ask for it.'
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">Help shape PR Pulse Pro</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          This is a future product discussion, not an availability, pricing, or launch commitment.
        </p>
        <Link to="/contact" className="btn-primary mt-8 h-12 px-8 text-sm md:text-base">
          Discuss a design partnership
        </Link>
      </div>
    </section>
  </div>
);

export default ProductPulsePro;
