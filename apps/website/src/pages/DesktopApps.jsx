import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, CheckCircle2, ChevronDown, Clock, Laptop, Mic, Sparkles, X } from 'lucide-react';
import { desktopApps } from '../content/siteCopy';

const stageClass = {
  Live: 'stage-live',
  'Coming Soon': 'stage-early',
  'Design Partner': 'stage-preview'
};

const AppleIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 170 170" fill="currentColor" aria-hidden="true">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.5-7.79-11.44-14.14-5.99-9.72-10.72-20.91-14.19-33.56-3.48-12.65-5.22-24.32-5.22-35.01 0-14.28 3.84-26.04 11.52-35.29 7.68-9.25 17.06-13.97 28.14-14.18 4.91 0 10.37 1.34 16.39 4.02 6.01 2.68 10.15 4.08 12.41 4.2 1.9.11 6.03-1.34 12.4-4.35 6.36-3.01 11.96-4.42 16.79-4.24 13.06.63 23.36 5.39 30.91 14.28-11.39 6.88-16.96 16.3-16.71 28.26.25 9.48 3.82 17.43 10.71 23.85 6.89 6.42 15.17 10.02 24.84 10.81-2.02 6.02-4.43 11.83-7.23 17.43zM119.22 31.84c0-7.39 2.69-14.45 8.08-21.18 5.39-6.73 11.93-10.66 19.62-11.79.48 1.13.73 2.37.75 3.72-.02 7.39-2.73 14.52-8.13 21.39-5.4 6.87-12.01 10.76-19.82 11.66-.17-1.27-.34-2.54-.5-3.8z" />
  </svg>
);

const DesktopApps = () => {
  const [expandedKey, setExpandedKey] = useState(null);

  const toggleCard = (key) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
            <div>
              <span className="label-chip">Bacumi product line · macOS first</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Bacumi Desktop Apps</h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
                Ten small, practical apps coming soon for individuals and organizations that want focused tools without unnecessary complexity.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#explore-apps" className="btn-primary h-12 px-8 text-sm md:text-base">
                  Explore Desktop Apps
                </a>
                <Link to="/contact" className="btn-secondary h-12 px-8 text-sm md:text-base">
                  Talk to Bacumi
                </Link>
              </div>
            </div>
            <div className="surface-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Featured macOS utility</p>
              <h2 className="mt-3 font-display text-2xl font-bold">Voice Composer</h2>
              <p className="mt-3 text-sm text-slate-600">
                Local-first dictation utility converting speech into structured text on your Mac using embedded Whisper.
              </p>
              <button
                type="button"
                onClick={() => {
                  toggleCard('voice-composer');
                  const el = document.getElementById('explore-apps');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
              >
                View Voice Composer <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-6">
            <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
              <Mic size={20} />
            </div>
            <h2 className="text-2xl font-bold">Local-First Intelligence</h2>
            <p className="mt-3 text-slate-600">
              Voice dictation, screenshot OCR retrieval, and semantic file search running entirely on-device with zero cloud telemetry.
            </p>
          </article>
          <article className="surface-card p-6">
            <div className="mb-3 inline-flex rounded-lg bg-accent/15 p-2 text-accent">
              <Laptop size={20} />
            </div>
            <h2 className="text-2xl font-bold">Focused Productivity</h2>
            <p className="mt-3 text-slate-600">
              Lightweight utilities for clipboard management, workspace orchestration, file transformations, and menu bar shortcuts.
            </p>
          </article>
        </div>
      </section>

      <section className="layout-container mt-12" id="explore-apps">
        <div className="mb-6">
          <h2 className="text-3xl font-bold md:text-4xl">Explore desktop apps</h2>
          <p className="mt-2 text-slate-600">Only products approved for public presentation are listed here.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense">
          {desktopApps.map((app) => {
            const isExpanded = expandedKey === app.key;

            return (
              <article
                key={app.key}
                className={`surface-card p-6 md:p-7 transition-all duration-300 flex flex-col justify-between h-full ${
                  isExpanded
                    ? 'col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 border-primary/50 shadow-xl ring-2 ring-primary/15 bg-surface'
                    : 'col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                        {app.track}
                      </span>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${stageClass[app.stage] || 'stage-early'}`}>
                        {app.stage}
                      </span>
                    </div>

                    {isExpanded && (
                      <button
                        type="button"
                        onClick={() => toggleCard(app.key)}
                        className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Close ${app.title} details`}
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>

                  <h2 className={`font-display font-bold text-slate-900 ${isExpanded ? 'mt-2 text-2xl md:text-3xl' : 'mt-2 text-2xl'}`}>
                    {app.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">{app.subtitle}</p>
                  <p className="mt-4 text-slate-600 leading-relaxed">{app.description}</p>

                  {isExpanded && (
                    <div id={`details-${app.key}`} className="mt-6 pt-5 border-t border-slate-200/80">
                      <div className="grid gap-6 md:grid-cols-12 items-start">
                        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-5">
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">About this tool</h3>
                            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-700">
                              {app.detailedDescription}
                            </p>
                          </div>

                          <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              macOS 14.0+ · Apple Silicon & Intel
                            </span>
                          </div>

                          <div className="pt-2">
                            <a
                              href={app.appStoreUrl && app.appStoreUrl !== '#' ? app.appStoreUrl : 'https://apps.apple.com'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 rounded-xl bg-[#0B132B] px-5 py-3 !text-white transition-all hover:bg-slate-800 shadow-md hover:shadow-lg"
                              aria-label={`View ${app.title} on the Mac App Store`}
                            >
                              <AppleIcon className="h-6 w-6 text-white shrink-0" />
                              <div className="text-left">
                                <span className="block text-[10px] uppercase font-medium tracking-wider text-slate-300 leading-tight">
                                  Coming Soon on the
                                </span>
                                <span className="block text-sm font-bold leading-tight tracking-tight text-white">
                                  Mac App Store
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="md:col-span-5 bg-slate-50/90 border border-slate-200/70 rounded-xl p-4 md:p-5">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                            <Sparkles size={14} /> Key capabilities
                          </h3>
                          {app.features && app.features.length > 0 && (
                            <ul className="mt-3 space-y-2.5 text-xs md:text-sm text-slate-700">
                              {app.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                                  <span className="leading-snug">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center gap-1.5">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                            <span>100% on-device & private processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCard(app.key)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus:outline-none focus-visible:underline"
                    aria-expanded={isExpanded}
                    aria-controls={`details-${app.key}`}
                  >
                    {isExpanded ? 'Less details' : 'Details'}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <button
                      type="button"
                      onClick={() => toggleCard(app.key)}
                      className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Collapse
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="section-block p-6 md:p-8">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            <Clock size={13} /> Platform direction
          </p>
          <h2 className="mt-2 text-2xl font-bold">macOS First → Apple Silicon Native</h2>
          <p className="mt-2 text-slate-600">
            Development starts with macOS. Windows versions may be considered in the future, but they are not currently offered or promised.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DesktopApps;
