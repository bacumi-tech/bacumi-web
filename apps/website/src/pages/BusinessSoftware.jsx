import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, BadgeCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import StageBadge from '../components/ui/StageBadge';
import { marketplace, solutions } from '../content/siteCopy';

const SolutionCard = ({ to, title, subtitle, description, stage, track }) => (
  <Link to={to} className="surface-card surface-card-interactive block p-6">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="track-badge">{track}</span>
      <StageBadge stage={stage} />
    </div>
    <h3 className="font-display text-2xl font-bold text-strong">{title}</h3>
    <p className="mt-1 text-sm text-muted">{subtitle}</p>
    <p className="mt-4 text-body">{description}</p>
    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
      Open solution <ArrowRight size={15} />
    </p>
  </Link>
);

const BusinessSoftware = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
          <div>
            <span className="label-chip">Bacumi product line</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">Bacumi Business Software</h1>
            <p className="mt-5 max-w-3xl text-lg text-body md:text-xl">
              Focused products for engineering operations and business verification, each with an explicit delivery stage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={marketplace.publisher} target="_blank" rel="noopener noreferrer" className="btn-primary h-12 px-8 text-sm md:text-base">
                View publisher profile
              </a>
              <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
                Contact sales
              </Link>
            </div>
          </div>
          <div className="surface-card p-6">
            <p className="section-eyebrow">Flagship today</p>
            <h2 className="mt-3 font-display text-2xl font-bold">PR Pulse</h2>
            <p className="mt-3 text-sm text-body">Live pull request operations workspace for Azure DevOps teams.</p>
            <Link to="/products/pulse" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              View PR Pulse <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="surface-card p-6">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <Activity size={20} />
          </div>
          <h2 className="text-2xl font-bold">Engineering</h2>
          <p className="mt-3 text-body">
            PR Pulse is live today. Treefold and Tagfold, two free Azure DevOps extensions, are coming soon. PR Pulse Pro is being explored with teams that want clearer historical flow signals.
          </p>
        </article>
        <article className="surface-card p-6">
          <div className="mb-3 inline-flex rounded-lg bg-accent/15 p-2 text-primary">
            <BadgeCheck size={20} />
          </div>
          <h2 className="text-2xl font-bold">Verification</h2>
          <p className="mt-3 text-body">
            Company Verify is a design-partner concept for Romania and VIES workflows built around Excel files.
          </p>
        </article>
      </div>
    </section>

    <section className="layout-container mt-12">
      <SectionHeader
        title="Business software catalog"
        description="Only products approved for public presentation are listed here."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {solutions.map(({ key, ...item }) => (
          <SolutionCard key={key} {...item} />
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
        <div>
          <p className="section-eyebrow">Shape a future workflow</p>
          <h2 className="mt-2 text-2xl font-bold">Tell us where your team needs a better tool</h2>
          <p className="mt-2 max-w-2xl text-body">
            Pilot applications help us understand real engineering and verification workflows. Every application is reviewed manually.
          </p>
        </div>
        <Link to="/pilots" className="btn-primary mt-6 h-11 shrink-0 px-7 text-sm md:mt-0">
          Explore pilot programs
        </Link>
      </div>
    </section>
  </div>
);

export default BusinessSoftware;
