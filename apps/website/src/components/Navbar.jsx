import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { contacts, navLinks, solutions } from '../content/siteCopy';

const stageClass = {
  Live: 'stage-live',
  'Coming Soon': 'stage-early',
  'Design Partner': 'stage-preview'
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsOpenedByHover = useRef(false);

  const openSolutionsFromHover = () => {
    solutionsOpenedByHover.current = true;
    setIsSolutionsOpen(true);
  };

  const closeSolutions = () => {
    solutionsOpenedByHover.current = false;
    setIsSolutionsOpen(false);
  };

  const toggleSolutions = () => {
    if (solutionsOpenedByHover.current) {
      solutionsOpenedByHover.current = false;
      setIsSolutionsOpen(true);
      return;
    }

    setIsSolutionsOpen((previous) => !previous);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 py-2 backdrop-blur-md shadow-[0_8px_24px_-18px_rgba(40,24,62,0.6)]' : 'bg-transparent py-4'
      }`}
    >
      <div className="layout-container flex h-16 items-center justify-between">
        <Link to="/" aria-label="Bacumi home">
          <img src="/images/logo.png" alt="Bacumi" className="h-9 w-auto object-contain md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <div
            className="relative"
            onMouseEnter={openSolutionsFromHover}
            onMouseLeave={closeSolutions}
          >
            <button
              className="nav-link inline-flex items-center gap-1"
              aria-controls="solutions-menu"
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
              onClick={toggleSolutions}
            >
              Solutions <ChevronDown size={16} />
            </button>
            {isSolutionsOpen && (
              <div id="solutions-menu" className="absolute left-0 top-full w-[23rem] pt-3">
                <div className="section-block p-3">
                  <p className="px-2 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Products</p>
                  {solutions.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="mb-1 block rounded-xl px-3 py-2.5 hover:bg-primary/5"
                      onClick={closeSolutions}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-900">{item.title}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${stageClass[item.stage]}`}>{item.stage}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-slate-600">{item.subtitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.main
            .filter((item) => item.to !== '/solutions')
            .map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          <Link to="/docs/pr-pulse" className="nav-link">
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/solutions" className="btn-primary h-10 px-6 text-sm">
            Explore Solutions
          </Link>
          <button
            className="rounded-lg border border-surface-border bg-white p-2 text-slate-800 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-surface-border bg-white/95 backdrop-blur md:hidden">
          <div className="layout-container py-4">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Products</p>
            <div className="space-y-1">
              {solutions.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 hover:bg-primary/5"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block font-semibold text-slate-900">{item.title}</span>
                  <span className="block text-xs text-slate-600">{item.stage}</span>
                </Link>
              ))}
            </div>
            <p className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Navigation</p>
            <div className="space-y-1">
              {navLinks.main.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-primary/5 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/docs/pr-pulse"
                className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-primary/5 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
            </div>
            <div className="mt-4 rounded-xl border border-surface-border bg-surface-light px-3 py-2 text-xs text-slate-600">
              Questions? Reach us at {contacts.support}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
