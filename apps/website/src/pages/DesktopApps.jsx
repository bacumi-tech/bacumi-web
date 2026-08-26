import React from 'react';
import { Monitor, Sparkles } from 'lucide-react';
import { desktopApps } from '../content/siteCopy';

const DesktopApps = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <span className="label-chip">Bacumi product line · macOS first</span>
        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Bacumi Desktop Apps</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
          Ten small, practical apps planned for individuals and organizations that want focused tools without unnecessary complexity.
        </p>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {desktopApps.map((app) => (
          <article key={app.key} className="surface-card p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary"><Monitor size={20} /></div>
              <span className="stage-early rounded-full px-2.5 py-1 text-[11px] font-bold">Coming Soon</span>
            </div>
            <h2 className="mt-5 text-2xl font-bold">{app.title}</h2>
            <p className="mt-3 text-slate-600">{app.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block p-6 md:p-8">
        <div className="inline-flex rounded-lg bg-accent/15 p-2 text-accent"><Sparkles size={20} /></div>
        <h2 className="mt-4 text-2xl font-bold">Platform direction</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Development starts with macOS. Windows versions may be considered in the future, but they are not currently offered or promised.
        </p>
      </div>
    </section>
  </div>
);

export default DesktopApps;
