import React from 'react';
import { BarChart3, BellRing, Clock3, History, Settings2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductHero from '../components/product/ProductHero';

const capabilities = [
  {
    icon: <History size={20} className="text-primary" />,
    title: '90-day history',
    description: 'A bounded historical window for reviewing recent pull request flow patterns.'
  },
  {
    icon: <Clock3 size={20} className="text-primary" />,
    title: 'PR cycle time',
    description: 'Planned cycle-time views for understanding how long pull requests take from creation to completion.'
  },
  {
    icon: <BarChart3 size={20} className="text-primary" />,
    title: 'First-review latency',
    description: 'Planned insight into the time between opening a pull request and receiving its first review.'
  },
  {
    icon: <Settings2 size={20} className="text-primary" />,
    title: 'Configurable stale thresholds',
    description: 'Organization-level policies for deciding when active pull requests need attention.'
  },
  {
    icon: <BellRing size={20} className="text-primary" />,
    title: 'Weekly Teams digest',
    description: 'A planned weekly summary of flow signals delivered to a configured Microsoft Teams destination.'
  },
  {
    icon: <Users size={20} className="text-primary" />,
    title: 'Minimal administration',
    description: 'Essential organization administration and entitlements without a broad management suite.'
  }
];

const ProductPulsePro = () => (
  <div className="page-shell pt-2">
    <ProductHero
      kicker="Coming soon"
      title={
        <>
          PR Pulse <span className="text-primary">Pro</span>
        </>
      }
      subtitle="A bounded future product for historical engineering flow signals, stale-work policies, and a weekly Teams digest. It is not currently available."
      cta={{
        text: 'Discuss a design partnership',
        link: '/contact',
        secondary: {
          text: 'Explore solutions',
          link: '/solutions'
        }
      }}
      preview={
        <div className="grid gap-4 p-6 md:grid-cols-3">
          {[
            ['90 days', 'Planned history window'],
            ['Cycle time', 'Planned flow metric'],
            ['Weekly', 'Planned Teams digest']
          ].map(([value, label]) => (
            <div key={label} className="surface-card p-5 text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      }
    />

    <section className="layout-container mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-chip">Bounded MVP</span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">The first Pro scope</h2>
        <p className="mt-4 text-lg text-slate-600">
          These capabilities describe the design-partner scope we plan to validate after the shared foundation is ready.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <article key={capability.title} className="surface-card p-6">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">{capability.icon}</div>
            <h3 className="text-xl font-bold">{capability.title}</h3>
            <p className="mt-3 text-slate-600">{capability.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="layout-container mt-12">
      <div className="section-block px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">Help shape PR Pulse Pro</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          This is a future product discussion, not an availability or launch commitment.
        </p>
        <Link to="/contact" className="btn-primary mt-8 h-12 px-8 text-sm md:text-base">
          Discuss a design partnership
        </Link>
      </div>
    </section>
  </div>
);

export default ProductPulsePro;
