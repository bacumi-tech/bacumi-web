import React from 'react';
import { ArrowRight, CalendarClock, FileSpreadsheet, Link2, ListTree, Lock, SlidersHorizontal, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';
import { contacts } from '../content/siteCopy';

const features = [
  {
    icon: <ListTree size={20} className="text-primary" />,
    title: 'Hierarchy intact',
    description: 'Tree queries export as indentation or as a level column, in the order your query shows them.'
  },
  {
    icon: <FileSpreadsheet size={20} className="text-primary" />,
    title: 'A workbook ready to use',
    description: 'A frozen, filterable header row and the columns you choose.'
  },
  {
    icon: <Type size={20} className="text-primary" />,
    title: 'Readable rich text',
    description: 'Descriptions and acceptance criteria become clean text, not raw HTML.'
  },
  {
    icon: <CalendarClock size={20} className="text-primary" />,
    title: 'Names and real dates',
    description: 'Identity fields show display names; dates are Excel dates in your own time zone.'
  },
  {
    icon: <Link2 size={20} className="text-primary" />,
    title: 'Links back to Azure DevOps',
    description: "Each row's ID links straight to the work item."
  },
  {
    icon: <SlidersHorizontal size={20} className="text-primary" />,
    title: 'Remembered choices',
    description: 'Your column and layout choices are remembered per query.'
  }
];

const previewRows = [
  ['Epic', 0],
  ['Feature', 1],
  ['User Story', 2],
  ['User Story', 2],
  ['Feature', 1]
];

const ProductTreefold = () => (
  <div className="page-shell pt-2">
    <ProductHero
      kicker="Coming soon · Free"
      title={
        <>
          Treefold for <span className="text-primary">Azure DevOps</span>
        </>
      }
      subtitle="Export any Azure Boards query to a clean Excel workbook, hierarchy and all. Coming soon to the Visual Studio Marketplace."
      cta={{
        text: 'Ask about Treefold',
        link: '/contact',
        secondary: {
          text: 'Read the docs',
          link: '/docs/treefold'
        }
      }}
      preview={
        <div className="p-6">
          <div className="surface-card overflow-hidden text-left">
            <div className="grid grid-cols-[4rem_1fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              <span>Level</span>
              <span>Work item type</span>
            </div>
            {previewRows.map(([type, level], index) => (
              <div
                key={`${type}-${index}`}
                className="grid grid-cols-[4rem_1fr] items-center border-b border-slate-100 px-4 py-2.5 text-sm text-slate-700 last:border-b-0"
              >
                <span className="font-semibold text-primary">{level + 1}</span>
                <span style={{ paddingLeft: `${level * 1.5}rem` }}>{type}</span>
              </div>
            ))}
            <p className="bg-slate-50 px-4 py-2 text-xs text-slate-500">Illustration of an indented tree export</p>
          </div>
        </div>
      }
    />

    <section className="layout-container mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-chip">What you get</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">A spreadsheet that matches your query</h2>
        <p className="mt-4 text-lg text-slate-600">
          Treefold adds an <strong>Export to Excel (Treefold)</strong> action to Azure Boards query results.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="surface-card p-6">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-3 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="section-block p-7 md:p-9">
          <span className="label-chip">
            <Lock size={13} /> Runs in your browser
          </span>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">Nothing is sent to Bacumi</h2>
          <p className="mt-4 text-slate-600">
            Treefold reads your query and work items with your own Azure DevOps sign-in. Only your own
            organization&apos;s REST API sees the requests, no matter how large the export. The workbook is
            generated in your browser and downloaded locally.
          </p>
          <p className="mt-3 text-slate-600">No Bacumi backend, no account, and no usage analytics.</p>
        </div>

        <div className="section-block p-7 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Permissions and scope</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <code>vso.work</code>, read-only. Treefold never changes a work item.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Exports only what your account is already allowed to read.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Works on flat and tree queries. One-hop (linked-item) queries are not yet supported.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">Coming soon to the Visual Studio Marketplace</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Treefold will be free. Questions or early feedback? Email{' '}
          <a href={`mailto:${contacts.support}`} className="font-semibold text-primary">
            {contacts.support}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-primary h-12 px-8 text-sm md:text-base">
            Contact Bacumi
          </Link>
          <Link to="/docs/treefold" className="btn-secondary h-12 px-8 text-sm md:text-base">
            Read docs <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ProductTreefold;
