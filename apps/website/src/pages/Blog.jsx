import React from 'react';

const posts = [
  {
    title: 'Reducing review bottlenecks with PR Pulse',
    description: 'A practical guide to staleness signals, review load balancing, and faster PR turnaround.',
    status: 'Planned'
  },
  {
    title: 'Designing an Excel-first company verification workflow',
    description: 'A product-design exploration of asynchronous Romania and VIES checks with auditable results.',
    status: 'Planned'
  },
  {
    title: 'Building a practical product foundation on Azure',
    description: 'How we are planning shared identity, delivery, and observability foundations before future paid products.',
    status: 'Planned'
  }
];

const Blog = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-12 text-center md:px-10">
          <span className="label-chip">Bacumi Blog</span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">Insights and product updates</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
            Product, operations, and delivery intelligence content for teams adopting Bacumi solutions.
          </p>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="grid gap-5">
          {posts.map((post) => (
            <article key={post.title} className="surface-card p-6">
              <span className="stage-early rounded-full px-2.5 py-1 text-xs font-bold">{post.status}</span>
              <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
              <p className="mt-3 text-slate-600">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
