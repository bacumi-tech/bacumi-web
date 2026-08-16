import React from 'react';
import { ShoppingCart, LifeBuoy, MapPin, Linkedin, Github } from 'lucide-react';
import { contacts } from '../content/siteCopy';

const XIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactCard = ({ icon, title, description, value, href }) => (
  <a href={href} className="surface-card block p-6 transition-all hover:border-primary/50 hover:-translate-y-0.5">
    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="mt-2 text-slate-600">{description}</p>
    <p className="mt-4 font-semibold text-primary">{value}</p>
  </a>
);

const Contact = () => {
  return (
    <div className="page-shell">
      <section className="layout-container">
        <div className="page-header px-6 py-12 text-center md:px-10">
          <span className="label-chip">Contact</span>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">Get in touch</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">
            Reach Bacumi for sales discussions, support requests, and partnership conversations.
          </p>
        </div>
      </section>

      <section className="layout-container mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          <ContactCard
            icon={<ShoppingCart size={22} />}
            title="Sales"
            description="Questions about roadmap, pilots, and commercial options."
            value={contacts.sales}
            href={`mailto:${contacts.sales}`}
          />
          <ContactCard
            icon={<LifeBuoy size={22} />}
            title="Support"
            description="Technical issues, account questions, and implementation assistance."
            value={contacts.support}
            href={`mailto:${contacts.support}`}
          />
        </div>
      </section>

      <section className="layout-container mt-8">
        <div className="section-block p-7 text-center">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <MapPin size={22} />
          </div>
          <h2 className="text-2xl font-bold">Location</h2>
          <p className="mt-2 text-slate-600">{contacts.location}</p>
        </div>
      </section>

      <section className="layout-container mt-8">
        <div className="section-block p-7 text-center">
          <h2 className="text-2xl font-bold">Follow Bacumi</h2>
          <div className="mt-5 flex items-center justify-center gap-4">
            <a href={contacts.x} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-surface-border bg-white p-3 text-slate-600 hover:text-primary" aria-label="Bacumi on X">
              <XIcon />
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-surface-border bg-white p-3 text-slate-600 hover:text-primary" aria-label="Bacumi on LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-surface-border bg-white p-3 text-slate-600 hover:text-primary" aria-label="Bacumi on GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
