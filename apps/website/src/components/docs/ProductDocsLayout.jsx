import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const ProductDocsLayout = ({
  children,
  docsNav,
  productLabel,
  docsRootPath,
  mobileSelectId,
  mobileSelectLabel,
  pagination,
  installCta
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPath = docsNav.some((doc) => doc.path === location.pathname)
    ? location.pathname
    : docsRootPath;

  return (
    <section className="docs-shell">
      <div className="layout-container">
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <Link to="/docs">Documentation</Link>
          <span aria-hidden="true">/</span>
          <span>{productLabel}</span>
        </nav>

        <div className="docs-mobile-nav">
          <label htmlFor={mobileSelectId} className="docs-mobile-label">
            {mobileSelectLabel}
          </label>
          <select
            id={mobileSelectId}
            className="docs-mobile-select"
            value={selectedPath}
            onChange={(event) => navigate(event.target.value)}
          >
            {docsNav.map((doc) => (
              <option key={doc.path} value={doc.path}>
                {doc.label}
              </option>
            ))}
          </select>
        </div>

        <div className="docs-content">
          <aside className="docs-sidebar surface-card">
            <p className="docs-sidebar-heading">{productLabel} documentation</p>
            <nav className="docs-sidebar-nav" aria-label={`${productLabel} documentation`}>
              {docsNav.map((doc) => (
                <NavLink key={doc.path} to={doc.path} end className="docs-nav-link">
                  {doc.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="docs-main">
            <article className="docs-article">{children}</article>

            <nav className="docs-pagination" aria-label="Documentation pagination">
              {pagination?.previous ? (
                <Link
                  to={pagination.previous.path}
                  className="docs-pagination-link docs-pagination-previous"
                  aria-label={`Previous: ${pagination.previous.label}`}
                >
                  <span className="docs-pagination-label">Previous</span>
                  <span>{pagination.previous.label}</span>
                </Link>
              ) : (
                <span />
              )}
              {pagination?.next ? (
                <Link
                  to={pagination.next.path}
                  className="docs-pagination-link docs-pagination-next"
                  aria-label={`Next: ${pagination.next.label}`}
                >
                  <span className="docs-pagination-label">Next</span>
                  <span>{pagination.next.label}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>

            {installCta?.title ? (
              <section className="docs-install-cta surface-card" aria-labelledby="docs-install-title">
                <div>
                  <p className="docs-install-eyebrow">{installCta.eyebrow}</p>
                  <h2 id="docs-install-title">{installCta.title}</h2>
                  <p>{installCta.description}</p>
                </div>
                {installCta.external ? (
                  <a
                    href={installCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary docs-install-link"
                  >
                    {installCta.linkText}
                  </a>
                ) : (
                  <Link to={installCta.href} className="btn-primary docs-install-link">
                    {installCta.linkText}
                  </Link>
                )}
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDocsLayout;
