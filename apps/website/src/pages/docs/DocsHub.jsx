import React from 'react';
import { Link } from 'react-router-dom';
import { documentationProducts } from '../../content/macAppDocs';
import { prPulseDocs } from '../../content/prPulseDocs';

const DocsHub = () => (
  <section className="docs-shell">
    <div className="layout-container">
      <article className="docs-article page-header px-6 py-10 md:px-10 md:py-12">
        <h1>Bacumi Documentation</h1>
        <p>
          Product documentation for Bacumi&apos;s live Azure DevOps extension and the macOS desktop apps
          currently in development.
        </p>
      </article>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {documentationProducts.map((product) => (
          <article key={product.key} className="surface-card flex h-full flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{product.platform}</p>
            <h2 className="mt-3 font-display text-2xl font-bold">{product.title}</h2>
            <p className="mt-3 flex-grow text-sm text-slate-600">{product.description}</p>
            <Link to={product.to} className="btn-secondary mt-6 h-11 px-5 text-sm">
              Open documentation
            </Link>
          </article>
        ))}
      </div>

      <section className="section-block mt-10 p-6 md:p-8">
        <h2 className="text-xl font-bold">PR Pulse quick links</h2>
        <p className="mt-2 text-sm text-slate-600">
          Jump directly into the PR Pulse guide if you already know what you need.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {prPulseDocs.map((doc) => (
            <li key={doc.path}>
              <Link to={doc.path} className="text-sm font-semibold text-primary hover:text-primary-hover">
                {doc.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </section>
);

export default DocsHub;
