import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { brand, contacts, navLinks, productLines } from '../content/siteCopy';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-surface-border bg-white/88 pt-14 pb-8 backdrop-blur-sm">
      <div className="layout-container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Bacumi home">
              <img src="/images/logo.png" alt="Bacumi" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-600">{brand.companySummary}</p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-slate-900">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/products" className="hover:text-primary">
                  All Products
                </Link>
              </li>
              {productLines.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-slate-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/docs/pr-pulse" className="hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal/trust" className="hover:text-primary">
                  Trust Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {navLinks.legal.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-6 md:flex-row md:items-center">
          <div className="text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Bacumi SRL. All rights reserved.</p>
            <p className="mt-1">Software company based in Romania, European Union</p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href={contacts.x} target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Bacumi on X">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Bacumi on LinkedIn">
              <Linkedin size={19} />
            </a>
            <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Bacumi on GitHub">
              <Github size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
