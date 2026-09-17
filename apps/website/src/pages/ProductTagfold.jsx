import React from 'react';
import { ArrowRight, Combine, Hash, Lock, PencilLine, ShieldCheck, Tags, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';
import { contacts } from '../content/siteCopy';

const features = [
  {
    icon: <Hash size={20} className="text-primary" />,
    title: 'Real usage counts',
    description: 'Every work item tag in the project, with how many work items use it.'
  },
  {
    icon: <Tags size={20} className="text-primary" />,
    title: 'Near-duplicates grouped',
    description: 'Tags with the same word in a different case, or a likely typo, appear together.'
  },
  {
    icon: <PencilLine size={20} className="text-primary" />,
    title: 'Rename',
    description: 'Rename a tag everywhere it is used, in one action.'
  },
  {
    icon: <Combine size={20} className="text-primary" />,
    title: 'Merge',
    description: 'Merge one tag into another, updating every affected work item and removing the old tag when done.'
  },
  {
    icon: <Trash2 size={20} className="text-primary" />,
    title: 'Delete with confirmation',
    description: "The affected count is shown up front, and you type the tag's name to confirm."
  },
  {
    icon: <ShieldCheck size={20} className="text-primary" />,
    title: 'Safe with concurrent edits',
    description: "Merge re-reads each work item's tags right before writing, so another person's new tag is not dropped."
  }
];

const previewGroups = [
  ['release', ['Release', 'relase']],
  ['customer', ['customer']],
  ['backend', ['Backend', 'backend']]
];

const ProductTagfold = () => (
  <div className="page-shell pt-2">
    <ProductHero
      kicker="Coming soon · Free"
      title={
        <>
          Tagfold for <span className="text-primary">Azure DevOps</span>
        </>
      }
      subtitle="See every work item tag in a project with a real usage count, and rename, merge, or delete tags safely. Coming soon to the Visual Studio Marketplace."
      cta={{
        text: 'Ask about Tagfold',
        link: '/contact',
        secondary: {
          text: 'Read the docs',
          link: '/docs/tagfold'
        }
      }}
      preview={
        <div className="p-6">
          <div className="surface-card overflow-hidden text-left">
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Project Settings · Tagfold
            </div>
            {previewGroups.map(([groupKey, tags]) => (
              <div
                key={groupKey}
                className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3 text-sm text-slate-700 last:border-b-0"
              >
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                    {tag}
                  </span>
                ))}
                {tags.length > 1 ? <span className="text-xs text-slate-500">Possible duplicates</span> : null}
              </div>
            ))}
            <p className="bg-slate-50 px-4 py-2 text-xs text-slate-500">Illustration of near-duplicate grouping</p>
          </div>
        </div>
      }
    />

    <section className="layout-container mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-chip">What you get</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Tag cleanup without the guesswork</h2>
        <p className="mt-4 text-lg text-slate-600">
          Tagfold adds a page under <strong>Project Settings</strong> for reviewing and tidying work item tags.
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
            Tagfold reads and writes tags with your own Azure DevOps sign-in. Only your own organization&apos;s
            REST API sees the requests.
          </p>
          <p className="mt-3 text-slate-600">No Bacumi backend, no account, and no usage analytics.</p>
        </div>

        <div className="section-block p-7 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Permissions and scope</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <code>vso.work_write</code>, needed to rename, merge, and delete tags on work items.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              If you don&apos;t have permission to change tags in a project, Tagfold tells you so.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Bulk apply or remove from query results is not included; Azure DevOps already does this.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">Coming soon to the Visual Studio Marketplace</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Tagfold will be free. Questions or early feedback? Email{' '}
          <a href={`mailto:${contacts.support}`} className="font-semibold text-primary">
            {contacts.support}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-primary h-12 px-8 text-sm md:text-base">
            Contact Bacumi
          </Link>
          <Link to="/docs/tagfold" className="btn-secondary h-12 px-8 text-sm md:text-base">
            Read docs <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ProductTagfold;
