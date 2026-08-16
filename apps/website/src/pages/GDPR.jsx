import React from 'react';
import { FileCheck, Globe, Shield, UserCheck } from 'lucide-react';
import { gdprSections, legalEntity, legalMeta } from '../content/legalCopy';

const blocks = [
  {
    icon: <Shield size={20} className="text-primary" />,
    title: 'Privacy and security controls',
    text: gdprSections.commitments[0]
  },
  {
    icon: <UserCheck size={20} className="text-primary" />,
    title: 'Access governance',
    text: gdprSections.commitments[1]
  },
  {
    icon: <FileCheck size={20} className="text-primary" />,
    title: 'Request handling processes',
    text: gdprSections.commitments[2]
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: 'Contractual safeguards',
    text: gdprSections.commitments[3]
  }
];

const GDPR = () => {
  return (
    <div className="page-shell">
      <section className="layout-container max-w-5xl">
        <div className="page-header px-6 py-12 md:px-10">
          <h1 className="text-4xl font-bold md:text-6xl">GDPR Information</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: {legalMeta.gdprLastUpdated}</p>
          <p className="mt-5 text-lg text-slate-600">{gdprSections.overview}</p>
        </div>
      </section>

      <section className="layout-container mt-10 max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="surface-card p-6">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">{block.icon}</div>
              <h2 className="text-xl font-bold">{block.title}</h2>
              <p className="mt-3 text-slate-600">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="layout-container mt-8 max-w-5xl">
        <div className="section-block p-7 md:p-9">
          <h2 className="text-2xl font-bold">Data subject requests and residency</h2>
          <p className="mt-3 text-slate-600">{gdprSections.dsr}</p>
          <p className="mt-3 text-slate-600">{gdprSections.residency}</p>
          <p className="mt-5 text-sm text-slate-500">
            Contact: <a className="font-semibold text-primary" href={`mailto:${legalEntity.contactEmail}`}>{legalEntity.contactEmail}</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default GDPR;
