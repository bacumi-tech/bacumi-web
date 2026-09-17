import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import StageBadge from './ui/StageBadge';
import { contacts, navLinks, navProductMenu, productLines } from '../content/siteCopy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsOpenedByHover = useRef(false);
  const mobileMenuButtonRef = useRef(null);

  const openProductsFromHover = () => {
    productsOpenedByHover.current = true;
    setIsProductsOpen(true);
  };

  const closeProducts = () => {
    productsOpenedByHover.current = false;
    setIsProductsOpen(false);
  };

  const toggleProducts = () => {
    if (productsOpenedByHover.current) {
      productsOpenedByHover.current = false;
      setIsProductsOpen(true);
      return;
    }

    setIsProductsOpen((previous) => !previous);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/92 py-2 backdrop-blur-md shadow-[0_8px_24px_-18px_rgba(15,17,21,0.35)]' : 'bg-transparent py-4'
      }`}
    >
      <div className="layout-container flex h-16 items-center justify-between">
        <Link to="/" aria-label="Bacumi home">
          <img src="/brand/bacumi-lockup.svg" alt="Bacumi" className="h-9 w-auto object-contain md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <div className="relative" onMouseEnter={openProductsFromHover} onMouseLeave={closeProducts}>
            <button
              className="nav-link inline-flex items-center gap-1"
              aria-controls="products-menu"
              aria-expanded={isProductsOpen}
              aria-haspopup="true"
              onClick={toggleProducts}
            >
              Products <ChevronDown size={16} />
            </button>
            {isProductsOpen && (
              <div id="products-menu" className="nav-mega-menu absolute left-0 top-full pt-3">
                <div className="section-block p-4">
                  <div className="mb-4 border-b border-surface-border pb-3">
                    <p className="nav-mega-column-title">Product lines</p>
                    {productLines.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="nav-mega-column-link"
                        aria-label={`${item.title} ${item.eyebrow}`}
                        onClick={closeProducts}
                      >
                        <span className="nav-mega-item-title">{item.title}</span>
                        <span className="nav-mega-item-meta">{item.eyebrow}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="nav-mega-grid">
                    <div>
                      <p className="nav-mega-column-title">{navProductMenu.business.title}</p>
                      {navProductMenu.business.items.map((item) => (
                        <Link
                          key={item.key}
                          to={item.to}
                          className="nav-mega-column-link"
                          onClick={closeProducts}
                        >
                          <span className="nav-mega-item-title">{item.title}</span>
                          <span className="nav-mega-item-meta">{item.subtitle}</span>
                          <span className="mt-1.5 inline-flex">
                            <StageBadge stage={item.stage} />
                          </span>
                        </Link>
                      ))}
                      <Link to={navProductMenu.business.to} className="nav-mega-view-all" onClick={closeProducts}>
                        View all business software <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div>
                      <p className="nav-mega-column-title">{navProductMenu.desktop.title}</p>
                      {navProductMenu.desktop.items.map((item) => (
                        <Link
                          key={item.key}
                          to={item.to}
                          className="nav-mega-column-link"
                          onClick={closeProducts}
                        >
                          <span className="nav-mega-item-title">{item.title}</span>
                          <span className="nav-mega-item-meta">{item.subtitle}</span>
                        </Link>
                      ))}
                      <Link to={navProductMenu.desktop.to} className="nav-mega-view-all" onClick={closeProducts}>
                        View all desktop apps <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div>
                      <p className="nav-mega-column-title">Resources</p>
                      {navProductMenu.resources.map((item) => (
                        <Link key={item.to} to={item.to} className="nav-mega-column-link" onClick={closeProducts}>
                          <span className="nav-mega-item-title">{item.title}</span>
                          <span className="nav-mega-item-meta">{item.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.main
            .filter((item) => item.to !== '/products')
            .map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          <Link to="/docs" className="nav-link">
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/products" className="btn-primary hidden h-10 px-6 text-sm sm:inline-flex">
            View products
          </Link>
          <button
            ref={mobileMenuButtonRef}
            className="rounded-lg border border-surface-border bg-white p-2 text-strong md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-surface-border bg-white/95 backdrop-blur md:hidden">
          <div className="layout-container py-4">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Products</p>
            <div className="space-y-1">
              {productLines.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 hover:bg-primary/5"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block font-semibold text-strong">{item.title}</span>
                  <span className="block text-xs text-body">{item.eyebrow}</span>
                </Link>
              ))}
            </div>
            <p className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Navigation</p>
            <div className="space-y-1">
              {navLinks.main.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 font-medium text-body hover:bg-primary/5 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/docs"
                className="block rounded-lg px-3 py-2 font-medium text-body hover:bg-primary/5 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
            </div>
            <div className="mt-4 rounded-xl border border-surface-border bg-surface-light px-3 py-2 text-xs text-body">
              Questions? Reach us at {contacts.support}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
