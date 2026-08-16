import React from 'react';
import { Target, ShieldCheck, Wrench } from 'lucide-react';
import { brand } from '../content/siteCopy';

const principles = [
  {
    icon: <Target size={20} className="text-primary" />,
    title: 'Outcome-driven products',
    text: 'We focus on practical workflows that improve execution quality, speed, and decision clarity.'
  },
  {
    icon: <ShieldCheck size={20} className="text-primary" />,
    title: 'Claim discipline',
    text: 'Public messaging is aligned with product reality, legal commitments, and verifiable implementation detail.'
  },
  {
    icon: <Wrench size={20} className="text-primary" />,
    title: 'Iterative execution',
    text: 'We ship in clear stages and refine products continuously with design-partner feedback and operational evidence.'
  }
];

const About = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-12 text-center md:px-10">
          <span className="label-chip">About Bacumi</span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">{brand.promise}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
            Bacumi is a product project building focused software for teams that want clearer workflows and better execution.
          </p>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">{item.icon}</div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="section-block p-7 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">How we position our portfolio</h2>
          <p className="mt-4 text-slate-600">
            PR Pulse for Azure DevOps is the live flagship product. The roadmap proceeds deliberately from the shared foundation to PR Pulse Pro and then Company Verify, with scope validated before each build stage.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
