import React from 'react';
import { legalEntity, legalMeta, privacySections } from '../content/legalCopy';

const PrivacyPolicy = () => {
  return (
    <div className="page-shell">
      <section className="layout-container max-w-4xl">
        <div className="page-header px-6 py-10 md:px-10">
          <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: {legalMeta.privacyLastUpdated}</p>
          <p className="mt-5 text-slate-600">{privacySections.scope}</p>
        </div>
      </section>

      <section className="layout-container mt-8 max-w-4xl">
        <div className="section-block legal-prose space-y-8 px-6 py-8 md:px-10">
          <div>
            <h2 className="text-2xl font-bold">1. Data controller and privacy contact</h2>
            <p className="mt-3 text-slate-700">
              {legalEntity.displayName} is the data controller for this website and operates from Romania. Privacy requests can be sent to{' '}
              <a href={`mailto:${legalEntity.contactEmail}`} className="text-primary font-semibold">{legalEntity.contactEmail}</a>.
            </p>
            <p className="mt-3 text-slate-700">
              Product-specific processing, hosting, and contractual details are provided where applicable. Publishing this page does not by itself represent a certification or replace product-specific agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Data categories</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {privacySections.dataCategories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Purposes and legal bases</h2>
            <p className="mt-3 text-slate-700">We process data for the following purposes:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
              {privacySections.purposes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-slate-700">Applicable legal bases include:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
              {privacySections.legalBases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Retention</h2>
            <p className="mt-3 text-slate-700">{privacySections.retention}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Subprocessors and transfers</h2>
            <p className="mt-3 text-slate-700">{privacySections.subprocessors}</p>
            <p className="mt-3 text-slate-700">{privacySections.transfers}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Your rights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {privacySections.rights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-slate-700">{privacySections.rightsContact}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
