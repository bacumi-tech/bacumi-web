import React from 'react';
import { Lock, Shield, Scale, Mail } from 'lucide-react';
import { trustSections, legalEntity } from '../content/legalCopy';

const trustCards = [
  {
    icon: <Lock size={20} className="text-primary" />,
    title: 'Access model',
    text: trustSections.accessModel
  },
  {
    icon: <Shield size={20} className="text-primary" />,
    title: 'Security controls',
    text: trustSections.securityControls
  },
  {
    icon: <Scale size={20} className="text-primary" />,
    title: 'Claims policy',
    text: trustSections.claimPolicy
  },
  {
    icon: <Mail size={20} className="text-primary" />,
    title: 'Security contact',
    text: trustSections.incident
  }
];

const Trust = () => {
  return (
    <div className="page-shell">
      <section className="layout-container max-w-5xl">
        <div className="page-header px-6 py-12 md:px-10">
          <h1 className="text-4xl font-bold md:text-6xl">Trust Center</h1>
          <p className="mt-5 text-lg text-slate-600">Security, privacy, and claim-governance posture for Bacumi products.</p>
        </div>
      </section>

      <section className="layout-container mt-10 max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2">
          {trustCards.map((card) => (
            <article key={card.title} className="surface-card p-6">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">{card.icon}</div>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-3 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="layout-container mt-8 max-w-5xl">
        <div className="section-block p-7 md:p-9">
          <h2 className="text-2xl font-bold">Request trust documentation</h2>
          <p className="mt-3 text-slate-600">
            For product security and privacy documentation requests, contact{' '}
            <a href={`mailto:${legalEntity.contactEmail}`} className="font-semibold text-primary">
              {legalEntity.contactEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Trust;
