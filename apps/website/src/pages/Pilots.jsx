import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import PilotApplicationForm from '../components/forms/PilotApplicationForm';
import { getPilotProgram } from '../content/pilotPrograms';

const Pilots = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = getPilotProgram(searchParams.get('product'))?.id || '';

  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-10 md:px-10 md:py-14">
          <div className="hero-grid">
            <div>
              <span className="label-chip">Pilot applications</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Apply for a Bacumi pilot</h1>
              <p className="mt-5 max-w-2xl text-lg text-body md:text-xl">
                Share the workflow you want to improve. We review every application manually and contact
                people when there is a suitable pilot.
              </p>
            </div>
            <div className="surface-card p-6 md:p-8">
              <h2 className="text-xl font-bold">What to expect</h2>
              <ul className="mt-5 space-y-4 text-sm text-body">
                {[
                  'An application is an expression of interest.',
                  'Access and timing depend on product fit and capacity.',
                  'Applying does not guarantee access.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container mt-10 max-w-5xl">
        <div className="section-block p-6 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Pilot application</h2>
          <p className="mt-2 text-body">Required fields are marked with an asterisk.</p>
          <div className="mt-7"><PilotApplicationForm initialProduct={initialProduct} /></div>
        </div>
      </section>
    </div>
  );
};

export default Pilots;
