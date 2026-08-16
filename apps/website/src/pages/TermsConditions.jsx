import React from 'react';
import { legalEntity, legalMeta, termsSections } from '../content/legalCopy';

const TermsConditions = () => {
  return (
    <div className="page-shell">
      <section className="layout-container max-w-4xl">
        <div className="page-header px-6 py-10 md:px-10">
          <h1 className="text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">Last updated: {legalMeta.termsLastUpdated}</p>
          <p className="mt-5 text-slate-600">These terms govern access to Bacumi websites and services.</p>
        </div>
      </section>

      <section className="layout-container mt-8 max-w-4xl">
        <div className="section-block legal-prose space-y-8 px-6 py-8 md:px-10">
          <div>
            <h2 className="text-2xl font-bold">1. Acceptance</h2>
            <p className="mt-3 text-slate-700">{termsSections.acceptance}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Service scope and status</h2>
            <p className="mt-3 text-slate-700">{termsSections.serviceStatus}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Commercial terms</h2>
            <p className="mt-3 text-slate-700">{termsSections.commercial}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Acceptable use</h2>
            <p className="mt-3 text-slate-700">{termsSections.acceptableUse}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Intellectual property</h2>
            <p className="mt-3 text-slate-700">{termsSections.ip}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">6. Disclaimers and liability</h2>
            <p className="mt-3 text-slate-700">{termsSections.disclaimers}</p>
            <p className="mt-3 text-slate-700">{termsSections.liability}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Governing law</h2>
            <p className="mt-3 text-slate-700">{termsSections.governingLaw}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">8. Contact</h2>
            <p className="mt-3 text-slate-700">
              For contractual or legal inquiries, contact{' '}
              <a href={`mailto:${legalEntity.contactEmail}`} className="font-semibold text-primary">
                {legalEntity.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
