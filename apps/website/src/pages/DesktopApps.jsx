import React from 'react';
import { CheckCircle2, Laptop, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import StageBadge from '../components/ui/StageBadge';
import { desktopApps } from '../content/siteCopy';

const DesktopApps = () => {
  const [voiceComposer] = desktopApps;

  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-10 md:px-10 md:py-14">
          <div className="hero-grid">
            <div>
              <span className="label-chip">Bacumi desktop software</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Bacumi Desktop Apps</h1>
              <p className="mt-5 max-w-3xl text-lg text-body md:text-xl">
                Focused, native Mac apps for individuals and organizations, distributed through the
                Mac App Store and direct/MDM packages. Voice Composer is the first app currently in development.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/pilots?product=voice-composer" className="btn-primary h-12 px-8 text-sm md:text-base">
                  Express pilot interest
                </Link>
                <Link to="/docs/voice-composer" className="btn-secondary h-12 px-8 text-sm md:text-base">
                  Read the product guide
                </Link>
              </div>
            </div>
            <div className="surface-card p-6 md:p-8">
              <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Mic size={24} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">Voice Composer</h2>
              <p className="mt-3 text-body">
                A focused dictation utility designed to turn speech into clear, editable text with local recognition.
              </p>
              <div className="mt-5"><StageBadge stage="In Development" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container mt-12" aria-labelledby="desktop-catalogue-heading">
        <SectionHeader
          title="Public desktop catalogue"
          description="We publish a desktop product when its status and next step are clear."
        />
        <article className="section-block mt-8 overflow-hidden p-6 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="track-badge">{voiceComposer.track}</span>
                <StageBadge stage={voiceComposer.stage} />
              </div>
              <h2 id="desktop-catalogue-heading" className="mt-5 font-display text-3xl font-bold md:text-4xl">
                {voiceComposer.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{voiceComposer.subtitle}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{voiceComposer.detailedDescription}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to={voiceComposer.pilotTo} className="btn-primary h-12 px-7 text-sm">
                  Apply for pilot consideration
                </Link>
                <Link to="/docs/voice-composer" className="btn-secondary h-12 px-7 text-sm">
                  Explore documentation
                </Link>
              </div>
            </div>
            <div className="surface-card bg-surface-light p-6">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <Laptop size={15} /> Product direction
              </p>
              <ul className="mt-5 space-y-4 text-sm text-body">
                {voiceComposer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-surface-border pt-5 text-sm text-muted">
                Platform availability and release timing will be confirmed as development progresses.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DesktopApps;
