import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Monitor } from 'lucide-react';
import { productLines } from '../content/siteCopy';

const icons = {
  'business-software': Building2,
  'desktop-apps': Monitor
};

const Products = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <span className="label-chip">Bacumi products</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          A clear portfolio for better work outcomes
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
          One Bacumi brand, with focused software for business workflows and small desktop tools for everyday work.
        </p>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-6 lg:grid-cols-2">
        {productLines.map((line) => {
          const Icon = icons[line.key];
          const action = line.key === 'business-software' ? 'Explore business software' : 'Explore desktop apps';

          return (
            <article key={line.key} className="surface-card p-7 md:p-8">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary"><Icon size={22} /></div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{line.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-bold">{line.title}</h2>
              <p className="mt-4 text-slate-600">{line.description}</p>
              <Link to={line.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                {action} <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-9 text-center md:px-10">
        <h2 className="text-2xl font-bold md:text-3xl">Built by Bacumi SRL</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Products are developed as separate, focused offerings with transparent stages and no bundled complexity.
        </p>
      </div>
    </section>
  </div>
);

export default Products;
