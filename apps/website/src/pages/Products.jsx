import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Monitor } from 'lucide-react';
import ProductCatalogCard from '../components/ui/ProductCatalogCard';
import SectionHeader from '../components/ui/SectionHeader';
import { companyStats, featuredProducts, productLines, solutions } from '../content/siteCopy';

const icons = {
  'business-software': Building2,
  'desktop-apps': Monitor
};

const Products = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <div className="hero-grid">
          <div>
            <span className="label-chip">Bacumi product portfolio</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A clear portfolio for better work outcomes
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-body md:text-xl">
              One Bacumi brand spanning business software for operational teams and focused native Mac apps.
            </p>
          </div>

          <div className="trust-strip" aria-label="Portfolio metrics">
            {companyStats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-6 lg:grid-cols-2">
        {productLines.map((line) => {
          const Icon = icons[line.key];
          const action = line.key === 'business-software' ? 'Explore business software' : 'Explore desktop apps';

          return (
            <article key={line.key} className="surface-card surface-card-interactive p-7 md:p-8">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                <Icon size={22} />
              </div>
              <p className="mt-5 section-eyebrow">{line.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-bold">{line.title}</h2>
              <p className="mt-4 text-body">{line.description}</p>
              <Link to={line.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                {action} <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>

    <section className="layout-container mt-14">
      <SectionHeader
        eyebrow="Highlighted offerings"
        title="Products available to explore today"
        description="Live business software, Voice Composer in development, and future programs with transparent status labels."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProducts.map(({ key, ...product }) => (
          <ProductCatalogCard key={key} {...product} />
        ))}
      </div>
    </section>

    <section className="layout-container mt-14">
      <SectionHeader
        eyebrow="Business software catalog"
        title="Operational products for engineering and verification"
        description="Each solution is published with an explicit delivery stage."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {solutions.map(({ key, to, title, subtitle, description, stage, track }) => (
          <ProductCatalogCard
            key={key}
            to={to}
            title={title}
            subtitle={subtitle}
            description={description}
            stage={stage}
            track={track}
            ctaLabel="Open solution"
          />
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-9 text-center md:px-10">
        <h2 className="text-2xl font-bold md:text-3xl">Built by Bacumi SRL</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body">
          Products are developed as separate, focused offerings with transparent stages and no bundled complexity.
        </p>
        <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
          About Bacumi <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  </div>
);

export default Products;
