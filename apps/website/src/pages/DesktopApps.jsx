import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, Monitor, Sparkles } from 'lucide-react';
import { desktopApps } from '../content/siteCopy';

const AppleIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 170 170" fill="currentColor" aria-hidden="true">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.5-7.79-11.44-14.14-5.99-9.72-10.72-20.91-14.19-33.56-3.48-12.65-5.22-24.32-5.22-35.01 0-14.28 3.84-26.04 11.52-35.29 7.68-9.25 17.06-13.97 28.14-14.18 4.91 0 10.37 1.34 16.39 4.02 6.01 2.68 10.15 4.08 12.41 4.2 1.9.11 6.03-1.34 12.4-4.35 6.36-3.01 11.96-4.42 16.79-4.24 13.06.63 23.36 5.39 30.91 14.28-11.39 6.88-16.96 16.3-16.71 28.26.25 9.48 3.82 17.43 10.71 23.85 6.89 6.42 15.17 10.02 24.84 10.81-2.02 6.02-4.43 11.83-7.23 17.43zM119.22 31.84c0-7.39 2.69-14.45 8.08-21.18 5.39-6.73 11.93-10.66 19.62-11.79.48 1.13.73 2.37.75 3.72-.02 7.39-2.73 14.52-8.13 21.39-5.4 6.87-12.01 10.76-19.82 11.66-.17-1.27-.34-2.54-.5-3.8z" />
  </svg>
);

const DesktopApps = () => {
  const [expandedKeys, setExpandedKeys] = useState(new Set());

  const toggleCard = (key) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-10 md:px-10 md:py-14">
          <span className="label-chip">Bacumi product line · macOS first</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Bacumi Desktop Apps</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
            Ten small, practical apps coming soon for individuals and organizations that want focused tools without unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
          {desktopApps.map((app) => {
            const isExpanded = expandedKeys.has(app.key);

            return (
              <article
                key={app.key}
                className={`surface-card p-6 transition-all duration-200 flex flex-col justify-between ${
                  isExpanded ? 'border-primary/50 shadow-md ring-1 ring-primary/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                      <Monitor size={20} />
                    </div>
                    <span className="stage-early rounded-full px-2.5 py-1 text-[11px] font-bold">Coming Soon</span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">{app.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{app.description}</p>

                  {isExpanded && (
                    <div id={`details-${app.key}`} className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-sm leading-relaxed text-slate-700 font-normal">
                        {app.detailedDescription}
                      </p>

                      {app.features && app.features.length > 0 && (
                        <ul className="mt-4 space-y-2 text-xs text-slate-600">
                          {app.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <a
                          href={app.appStoreUrl && app.appStoreUrl !== '#' ? app.appStoreUrl : 'https://apps.apple.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 rounded-xl bg-[#0B132B] px-4 py-2.5 text-white transition-all hover:bg-slate-800 shadow-sm hover:shadow"
                          aria-label={`View ${app.title} on the Mac App Store`}
                        >
                          <AppleIcon className="h-5 w-5 text-white shrink-0" />
                          <div className="text-left">
                            <span className="block text-[9px] uppercase font-medium tracking-wide text-slate-300 leading-tight">
                              Coming Soon on the
                            </span>
                            <span className="block text-xs font-bold leading-tight tracking-tight">
                              Mac App Store
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCard(app.key)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus:outline-none focus-visible:underline"
                    aria-expanded={isExpanded}
                    aria-controls={`details-${app.key}`}
                  >
                    {isExpanded ? 'Less details' : 'Details'}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="section-block p-6 md:p-8">
          <div className="inline-flex rounded-lg bg-accent/15 p-2 text-accent">
            <Sparkles size={20} />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Platform direction</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Development starts with macOS. Windows versions may be considered in the future, but they are not currently offered or promised.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DesktopApps;
