import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getAdjacentDocs, prPulseDocs } from '../../content/prPulseDocs';

const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse';

const DocsLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { previous, next } = getAdjacentDocs(location.pathname);
  const selectedPath = prPulseDocs.some((doc) => doc.path === location.pathname)
    ? location.pathname
    : prPulseDocs[0].path;

  return (
    <section className="docs-shell">
      <div className="layout-container">
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <Link to="/docs/pr-pulse">Documentation</Link>
          <span aria-hidden="true">/</span>
          <span>PR Pulse</span>
        </nav>

        <div className="docs-mobile-nav">
          <label htmlFor="pr-pulse-docs-select" className="docs-mobile-label">
            Browse PR Pulse documentation
          </label>
          <select
            id="pr-pulse-docs-select"
            className="docs-mobile-select"
            value={selectedPath}
            onChange={(event) => navigate(event.target.value)}
          >
            {prPulseDocs.map((doc) => (
              <option key={doc.path} value={doc.path}>
                {doc.label}
              </option>
            ))}
          </select>
        </div>

        <div className="docs-content">
          <aside className="docs-sidebar surface-card">
            <p className="docs-sidebar-heading">PR Pulse documentation</p>
            <nav className="docs-sidebar-nav" aria-label="PR Pulse documentation">
              {prPulseDocs.map((doc) => (
                <NavLink key={doc.path} to={doc.path} end className="docs-nav-link">
                  {doc.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="docs-main">
            <article className="docs-article">{children}</article>

            <nav className="docs-pagination" aria-label="Documentation pagination">
              {previous ? (
                <Link to={previous.path} className="docs-pagination-link docs-pagination-previous" aria-label={`Previous: ${previous.label}`}>
                  <span className="docs-pagination-label">Previous</span>
                  <span>{previous.label}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link to={next.path} className="docs-pagination-link docs-pagination-next" aria-label={`Next: ${next.label}`}>
                  <span className="docs-pagination-label">Next</span>
                  <span>{next.label}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>

            <section className="docs-install-cta surface-card" aria-labelledby="docs-install-title">
              <div>
                <p className="docs-install-eyebrow">PR Pulse for Azure DevOps</p>
                <h2 id="docs-install-title">Ready to use PR Pulse?</h2>
                <p>Install the extension from the Visual Studio Marketplace and open it in your Azure DevOps project.</p>
              </div>
              <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer" className="btn-primary docs-install-link">
                Install from Marketplace
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsLayout;
