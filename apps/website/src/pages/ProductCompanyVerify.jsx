import React from 'react';
import { BadgeCheck, Download, FileSpreadsheet, History, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';

const workflow = [
  {
    icon: <FileSpreadsheet size={20} className="text-primary" />,
    title: 'Excel import',
    description: 'Start a verification batch from an Excel file containing Romanian or EU business identifiers.'
  },
  {
    icon: <RefreshCw size={20} className="text-primary" />,
    title: 'Asynchronous processing',
    description: 'Run verification work as a background batch instead of keeping a spreadsheet session open.'
  },
  {
    icon: <BadgeCheck size={20} className="text-primary" />,
    title: 'Romania and VIES checks',
    description: 'Plan verification around Romanian company data and EU VAT validation through VIES.'
  },
  {
    icon: <History size={20} className="text-primary" />,
    title: 'Auditable results',
    description: 'Retain result status and processing context so completed checks can be reviewed.'
  },
  {
    icon: <Download size={20} className="text-primary" />,
    title: 'Excel export',
    description: 'Download structured batch results back into an Excel-friendly workflow.'
  }
];

const deferredCapabilities = [
  'AML screening',
  'ERP integrations',
  'a separate Excel add-in',
  'Microsoft Teams or Power BI experiences',
  'country coverage beyond Romania and VIES'
];

const ProductCompanyVerify = () => (
  <div className="page-shell pt-2">
    <ProductHero
      kicker="Design partner"
      title={
        <>
          Company <span className="text-primary">Verify</span>
        </>
      }
      subtitle="A planned Excel-first workflow for Romanian company data and VIES validation, with asynchronous processing and auditable results."
      cta={{
        text: 'Join the design partner program',
        link: '/contact',
        secondary: {
          text: 'Explore solutions',
          link: '/solutions'
        }
      }}
      preview={
        <div className="p-6">
          <div className="surface-card overflow-hidden">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              <span>Batch input</span>
              <span>Status</span>
              <span>Result</span>
            </div>
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] items-center px-4 py-4 text-sm text-slate-700">
              <span className="font-semibold">companies.xlsx</span>
              <span>Planned workflow</span>
              <span className="text-primary">Excel export</span>
            </div>
          </div>
        </div>
      }
    />

    <section className="layout-container mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-chip">Proposed first release</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">A focused batch verification workflow</h2>
        <p className="mt-4 text-lg text-slate-600">
          Company Verify is in design-partner discovery. The initial scope stays narrow so the core workflow can be validated before implementation.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((step) => (
          <article key={step.title} className="surface-card p-6">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">{step.icon}</div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-3 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block p-7 md:p-9">
        <h2 className="text-2xl font-bold md:text-3xl">Deliberately outside the first scope</h2>
        <p className="mt-4 text-slate-600">The first product discussion defers:</p>
        <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
          {deferredCapabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">Validate the workflow with us</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Join a design-partner conversation about the Romania, VIES, and Excel batch workflow.
        </p>
        <Link to="/contact" className="btn-primary mt-8 h-12 px-8 text-sm md:text-base">
          Join the design partner program
        </Link>
      </div>
    </section>
  </div>
);

export default ProductCompanyVerify;
