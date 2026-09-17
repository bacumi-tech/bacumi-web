import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, BadgeCheck, Building2, Clock3, FileSpreadsheet, Mic, Monitor, Users } from 'lucide-react';
import ProductCatalogCard from '../components/ui/ProductCatalogCard';
import SectionHeader from '../components/ui/SectionHeader';
import { brand, companyStats, featuredProducts, marketplace, productLines } from '../content/siteCopy';

const Home = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-10 md:px-10 md:py-14">
          <div className="hero-grid">
            <div>
              <span className="label-chip">Bacumi · Software products</span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">{brand.heroTitle}</h1>
              <p className="mt-5 max-w-2xl text-lg text-body md:text-xl">{brand.heroSubtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-primary h-12 px-8 text-sm md:text-base">
                  View product portfolio <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
                  Contact sales
                </Link>
              </div>
            </div>

            <div className="trust-strip" aria-label="Company product metrics">
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

      <section className="layout-container mt-14">
        <SectionHeader
          eyebrow="Featured products"
          title="Software built for real workflows"
          description="From live Azure DevOps tooling to focused desktop software, each public Bacumi product has a clear delivery stage and useful next step."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map(({ key, ...product }) => (
            <ProductCatalogCard key={key} {...product} />
          ))}
        </div>
      </section>

      <section className="soft-section mt-16 py-16">
        <div className="layout-container">
          <SectionHeader
            align="center"
            eyebrow="Product lines"
            title="Two focused portfolios under one brand"
            description="Business software for operational teams and desktop apps for everyday work—each kept deliberately narrow."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="surface-card surface-card-interactive p-7">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                <Building2 size={22} />
              </div>
              <h3 className="text-2xl font-bold">{productLines[0].title}</h3>
              <p className="mt-3 text-body">{productLines[0].description}</p>
              <ul className="mt-5 space-y-2 text-sm text-strong">
                <li className="flex items-start gap-2">
                  <Users size={16} className="mt-0.5 shrink-0 text-primary" /> Multi-repository PR visibility
                </li>
                <li className="flex items-start gap-2">
                  <FileSpreadsheet size={16} className="mt-0.5 shrink-0 text-primary" /> Query export and tag cleanup, coming soon
                </li>
                <li className="flex items-start gap-2">
                  <Clock3 size={16} className="mt-0.5 shrink-0 text-primary" /> Planned historical flow metrics
                </li>
                <li className="flex items-start gap-2">
                  <Activity size={16} className="mt-0.5 shrink-0 text-primary" /> Team and personal execution views
                </li>
              </ul>
              <Link to={productLines[0].to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Explore business software <ArrowRight size={15} />
              </Link>
            </article>

            <article className="surface-card surface-card-interactive p-7">
              <div className="mb-4 inline-flex rounded-lg bg-accent/15 p-2 text-primary">
                <Monitor size={22} />
              </div>
              <h3 className="text-2xl font-bold">{productLines[1].title}</h3>
              <p className="mt-3 text-body">{productLines[1].description}</p>
              <ul className="mt-5 space-y-2 text-sm text-strong">
                <li className="flex items-start gap-2">
                  <Mic size={16} className="mt-0.5 shrink-0 text-primary" /> Voice Composer in active development
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck size={16} className="mt-0.5 shrink-0 text-primary" /> For individuals and organizations
                </li>
                <li className="flex items-start gap-2">
                  <Clock3 size={16} className="mt-0.5 shrink-0 text-primary" /> Native Mac apps, App Store and direct
                </li>
              </ul>
              <Link to={productLines[1].to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Explore desktop apps <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="layout-container mt-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <span className="label-chip">Flagship · Live today</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">PR Pulse for Azure DevOps teams</h2>
            <p className="mt-4 text-lg text-body">
              PR Pulse is Bacumi&apos;s live flagship solution. It provides multi-repository pull request visibility,
              reviewer load awareness, and execution focus directly in Azure DevOps.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/products/pulse" className="btn-primary h-11 px-7 text-sm">
                View PR Pulse <ArrowRight size={16} />
              </Link>
              <a href={marketplace.pulseInstall} target="_blank" rel="noopener noreferrer" className="btn-secondary h-11 px-7 text-sm">
                Azure DevOps Marketplace
              </a>
            </div>
          </div>
          <div className="surface-card overflow-hidden p-2">
            <img src="/images/pulse/marketing-visibility.png" alt="PR Pulse visibility preview" className="block w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="layout-container mt-14">
        <div className="section-block px-6 py-10 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">Evaluate Bacumi products for your team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Start with PR Pulse today or tell us which future workflow you would like to help shape.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/products" className="btn-primary h-12 px-8 text-sm md:text-base">
              Explore products
            </Link>
            <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
              Contact Bacumi
            </Link>
            <Link to="/pilots" className="btn-secondary h-12 px-8 text-sm md:text-base">
              Explore pilot programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
