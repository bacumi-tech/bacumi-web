import React from 'react';
import { LifeBuoy, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import { contacts } from '../content/siteCopy';

const Contact = () => (
  <div className="page-shell">
    <section className="layout-container">
      <div className="page-header px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <span className="label-chip">Contact</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Contact Bacumi</h1>
            <p className="mt-5 max-w-2xl text-lg text-body md:text-xl">
              Tell us what you need, whether it is product support, a commercial question, or a partnership idea.
            </p>
          </div>
          <div className="surface-card p-6">
            <p className="flex items-center gap-2 text-sm font-bold text-strong"><MapPin size={17} className="text-primary" /> Based in Romania</p>
            <p className="mt-2 text-sm text-body">{contacts.location}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-container mt-10">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
        <div className="section-block p-6 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Send a message</h2>
          <p className="mt-2 text-body">Required fields are marked with an asterisk.</p>
          <div className="mt-7"><ContactForm /></div>
        </div>
        <aside className="space-y-5" aria-label="Other ways to contact Bacumi">
          <div className="surface-card p-6">
            <Mail size={21} className="text-primary" />
            <h2 className="mt-4 text-lg font-bold">Sales and partnerships</h2>
            <p className="mt-2 text-sm text-body">Questions about products, pilots, and commercial fit.</p>
            <a href={`mailto:${contacts.sales}`} className="mt-4 inline-block text-sm font-semibold text-primary">{contacts.sales}</a>
          </div>
          <div className="surface-card p-6">
            <LifeBuoy size={21} className="text-primary" />
            <h2 className="mt-4 text-lg font-bold">Product support</h2>
            <p className="mt-2 text-sm text-body">Help with PR Pulse or another published Bacumi product.</p>
            <a href={`mailto:${contacts.support}`} className="mt-4 inline-block text-sm font-semibold text-primary">{contacts.support}</a>
          </div>
        </aside>
      </div>
    </section>
  </div>
);

export default Contact;
