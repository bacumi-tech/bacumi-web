import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, BadgeCheck, Clock3, FileSpreadsheet, Users } from 'lucide-react';
import { brand, productLines, roadmap } from '../content/siteCopy';

const Home = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="label-chip">Bacumi products</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{brand.heroTitle}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">{brand.heroSubtitle}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/products" className="btn-primary h-12 px-8 text-sm md:text-base">
                Explore Products <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
                Talk to Bacumi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section mt-12 py-16">
        <div className="layout-container">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Two focused product lines</h2>
            <p className="mt-4 text-lg text-slate-600">Business software and small desktop apps, built under one Bacumi brand.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="surface-card p-7">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                <Activity size={22} />
              </div>
              <h3 className="text-2xl font-bold">{productLines[0].title}</h3>
              <p className="mt-3 text-slate-600">{productLines[0].description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><Users size={16} className="mt-0.5 text-primary" /> Multi-repository PR visibility</li>
                <li className="flex items-start gap-2"><Clock3 size={16} className="mt-0.5 text-primary" /> Planned historical flow metrics</li>
                <li className="flex items-start gap-2"><Activity size={16} className="mt-0.5 text-primary" /> Team and personal execution views</li>
              </ul>
              <Link to={productLines[0].to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore business software <ArrowRight size={15} /></Link>
            </article>

            <article className="surface-card p-7">
              <div className="mb-4 inline-flex rounded-lg bg-accent/15 p-2 text-accent">
                <BadgeCheck size={22} />
              </div>
              <h3 className="text-2xl font-bold">{productLines[1].title}</h3>
              <p className="mt-3 text-slate-600">{productLines[1].description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><FileSpreadsheet size={16} className="mt-0.5 text-accent" /> Ten separate, focused app concepts</li>
                <li className="flex items-start gap-2"><BadgeCheck size={16} className="mt-0.5 text-accent" /> For individuals and organizations</li>
                <li className="flex items-start gap-2"><Clock3 size={16} className="mt-0.5 text-accent" /> macOS first, all currently planned</li>
              </ul>
              <Link to={productLines[1].to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore desktop apps <ArrowRight size={15} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="layout-container mt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <span className="label-chip">Flagship solution today</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">PR Pulse for Azure DevOps teams</h2>
            <p className="mt-4 text-lg text-slate-600">
              PR Pulse is Bacumi's live flagship solution. It provides multi-repository pull request visibility, reviewer load awareness, and execution focus directly in Azure DevOps.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/products/pulse" className="btn-primary h-11 px-7 text-sm">
                View PR Pulse <ArrowRight size={16} />
              </Link>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary h-11 px-7 text-sm"
              >
                Open Marketplace
              </a>
            </div>
          </div>
          <div className="surface-card overflow-hidden p-2">
            <img src="/images/pulse/marketing-visibility.png" alt="PR Pulse visibility preview" className="block w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="soft-section mt-16 py-16">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Now and next</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="surface-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Now</p>
              <h3 className="mt-2 text-2xl font-bold">Live delivery value</h3>
              <p className="mt-3 text-slate-600">{roadmap.now}</p>
            </article>
            <article className="surface-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Next</p>
              <h3 className="mt-2 text-2xl font-bold">Deliberate product sequence</h3>
              <p className="mt-3 text-slate-600">{roadmap.next}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="layout-container mt-14">
        <div className="section-block px-6 py-10 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to explore Bacumi products?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Start with PR Pulse today or review the focused products planned next.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/products" className="btn-primary h-12 px-8 text-sm md:text-base">
              Explore Products
            </Link>
            <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
              Contact Bacumi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
