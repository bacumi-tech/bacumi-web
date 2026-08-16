import React from 'react';
import { Activity, ArrowRight, Clock, Layout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';

const valuePoints = [
  {
    icon: <Clock size={20} className="text-primary" />,
    title: 'Live staleness visibility',
    description: 'See which pull requests are fresh, aging, or critical so teams can act before work stalls.'
  },
  {
    icon: <Users size={20} className="text-primary" />,
    title: 'Reviewer load awareness',
    description: 'Spot overloaded reviewers quickly and rebalance review assignments with less friction.'
  },
  {
    icon: <Layout size={20} className="text-primary" />,
    title: 'Team view + personal focus',
    description: 'Move between all-project triage and focused personal queues without switching tools.'
  }
];

const ProductPulse = () => {
  return (
    <div className="page-shell pt-2">
      <ProductHero
        kicker="Flagship solution"
        title={
          <>
            PR Pulse for <span className="text-primary">Azure DevOps</span>
          </>
        }
        subtitle="Team visibility and individual focus in one Azure DevOps-native workspace."
        cta={{
          text: 'Install from Marketplace',
          link: 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse',
          external: true,
          secondary: {
            text: 'Explore all solutions',
            link: '/solutions'
          }
        }}
        flushPreview
        preview={<img src="/images/pulse/marketing-visibility.png" alt="PR Pulse team visibility and focused review view" className="block w-full h-auto" />}
      />

      <section className="layout-container mt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="label-chip">
              <Activity size={13} /> Delivery operations
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Spot bottlenecks instantly</h2>
            <p className="mt-4 text-lg text-slate-600">
              PR Pulse combines check outcomes, reviewer status, and staleness alerts so teams can reduce review latency and keep releases predictable.
            </p>
            <div className="mt-7 space-y-4">
              {valuePoints.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="mt-0.5">{point.icon}</div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                    <p className="text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden p-2">
            <img src="/images/pulse/marketing-bottlenecks.png" alt="PR Pulse bottleneck monitoring preview" className="block w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="soft-section mt-14 py-14">
        <div className="layout-container">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold md:text-4xl">Why teams keep PR Pulse open</h3>
            <p className="mt-4 text-lg text-slate-600">Leaders get project-wide visibility while reviewers keep a focused, actionable queue.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {valuePoints.map((point) => (
              <article key={point.title} className="surface-card p-5">
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">{point.icon}</div>
                <h4 className="text-lg font-bold">{point.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="section-block px-6 py-10 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to clear your PR backlog?</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse" target="_blank" rel="noopener noreferrer" className="btn-primary h-12 px-8 text-sm md:text-base">
              Install PR Pulse for free
            </a>
            <Link to="/docs/pr-pulse/dashboard" className="btn-secondary h-12 px-8 text-sm md:text-base">
              Read docs <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPulse;
