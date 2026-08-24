import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, BadgeCheck, Clock } from 'lucide-react';
import { marketplace, roadmap, solutions } from '../content/siteCopy';

const stageClass = {
  Live: 'stage-live',
  'Coming Soon': 'stage-early',
  'Design Partner': 'stage-preview'
};

const SolutionCard = ({ to, title, subtitle, description, stage, track }) => (
  <Link to={to} className="surface-card block p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">{track}</span>
      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${stageClass[stage]}`}>{stage}</span>
    </div>
    <h3 className="font-display text-2xl font-bold text-slate-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    <p className="mt-4 text-slate-600">{description}</p>
    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Open solution <ArrowRight size={15} /></p>
  </Link>
);

const BusinessSoftware = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
          <div>
            <span className="label-chip">Bacumi product line</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Bacumi Business Software</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
              Focused products for engineering operations and business verification, each with an explicit delivery stage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={marketplace.publisher} target="_blank" rel="noopener noreferrer" className="btn-primary h-12 px-8 text-sm md:text-base">View Publisher Profile</a>
              <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">Talk to Bacumi</Link>
            </div>
          </div>
          <div className="surface-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Flagship today</p>
            <h2 className="mt-3 font-display text-2xl font-bold">PR Pulse</h2>
            <p className="mt-3 text-sm text-slate-600">Live pull request operations workspace for Azure DevOps teams.</p>
            <Link to="/products/pulse" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">View PR Pulse <ArrowRight size={15} /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="surface-card p-6">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary"><Activity size={20} /></div>
          <h2 className="text-2xl font-bold">Engineering</h2>
          <p className="mt-3 text-slate-600">PR Pulse is live today. PR Pulse Pro is the bounded next product after the shared foundation milestone.</p>
        </article>
        <article className="surface-card p-6">
          <div className="mb-3 inline-flex rounded-lg bg-accent/15 p-2 text-accent"><BadgeCheck size={20} /></div>
          <h2 className="text-2xl font-bold">Verification</h2>
          <p className="mt-3 text-slate-600">Company Verify is a design-partner concept for Romania and VIES workflows built around Excel files.</p>
        </article>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold md:text-4xl">Explore business software</h2>
        <p className="mt-2 text-slate-600">Only products approved for public presentation are listed here.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {solutions.map(({ key, ...item }) => <SolutionCard key={key} {...item} />)}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block p-6 md:p-8">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Clock size={13} /> Roadmap</p>
        <h2 className="mt-2 text-2xl font-bold">Foundation → PR Pulse Pro → Company Verify</h2>
        <p className="mt-2 text-slate-600">{roadmap.next}</p>
      </div>
    </section>
  </div>
);

export default BusinessSoftware;
