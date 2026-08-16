import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pulseFeatures = [
  'Unified multi-repository PR dashboard',
  'All PRs, My PRs, and My Reviews views',
  'Staleness and recency visibility',
  'Checks popover and reviewer signals',
  'Filtering, search, sorting, and pagination',
  'Manual refresh and optional enrichment hooks'
];

const roadmapProducts = [
  {
    name: 'PR Pulse Pro',
    status: 'Design Partner',
    summary: 'A future paid product focused on 90-day flow history, configurable stale thresholds, and weekly Teams digests.'
  },
  {
    name: 'Company Verify',
    status: 'Design Partner',
    summary: 'A planned Excel-first workflow for Romania and VIES company verification with auditable results.'
  }
];

const Pricing = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-12 text-center md:px-10">
          <span className="label-chip">Pricing and packaging</span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">Transparent pricing by product stage</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
            PR Pulse is live and free today. Future products are being scoped through design-partner conversations before commercial packaging.
          </p>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="section-block p-7 md:p-9">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold">PR Pulse</h2>
            <span className="stage-live rounded-full px-3 py-1 text-sm font-bold">Free</span>
          </div>
          <p className="text-4xl font-bold">$0</p>
          <p className="mt-2 text-slate-600">No credit card required.</p>

          <ul className="mt-8 grid gap-3 text-slate-700 sm:grid-cols-2">
            {pulseFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check size={17} className="text-emerald-600" /> {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link to="/products/pulse" className="btn-primary h-11 px-7 text-sm">
              Open PR Pulse details
            </Link>
          </div>
        </div>
      </section>

      <section className="layout-container mt-12">
        <h2 className="text-3xl font-bold md:text-4xl">Roadmap products</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {roadmapProducts.map((product) => (
            <article key={product.name} className="surface-card flex h-full flex-col p-6">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <span className="stage-preview mt-3 w-fit rounded-full px-2.5 py-1 text-xs font-bold">
                {product.status}
              </span>
              <p className="mt-4 flex-grow text-slate-600">{product.summary}</p>
              <Link to="/contact" className="btn-secondary mt-6 h-11 px-6 text-sm">
                Request program details
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
