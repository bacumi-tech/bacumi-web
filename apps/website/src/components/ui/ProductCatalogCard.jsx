import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StageBadge from './StageBadge';

const ProductCatalogCard = ({
  to,
  title,
  subtitle,
  description,
  stage,
  track,
  platform,
  docsTo,
  externalHref,
  ctaLabel = 'View product'
}) => {
  return (
    <article className="product-catalog-card group">
      <div className="product-catalog-card-top">
        <div className="flex flex-wrap items-center gap-2">
          {track ? <span className="track-badge">{track}</span> : null}
          {platform ? <span className="platform-badge">{platform}</span> : null}
          {stage ? <StageBadge stage={stage} /> : null}
        </div>
        <h3 className="product-catalog-card-title">{title}</h3>
        {subtitle ? <p className="product-catalog-card-subtitle">{subtitle}</p> : null}
      </div>
      <p className="product-catalog-card-copy">{description}</p>
      <div className="product-catalog-card-actions">
        {to ? (
          <Link to={to} className="product-catalog-card-link">
            {ctaLabel} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : null}
        {docsTo ? (
          <Link to={docsTo} className="product-catalog-card-docs" onClick={(event) => event.stopPropagation()}>
            Read product guide
          </Link>
        ) : null}
        {externalHref ? (
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="product-catalog-card-docs"
          >
            Marketplace
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default ProductCatalogCard;
