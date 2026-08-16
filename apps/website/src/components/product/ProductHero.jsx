import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ActionLink = ({ href, className, children, external }) => {
  if (external || (href && href.startsWith('http'))) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

const ProductHero = ({ title, subtitle, cta, preview, image, flushPreview = false, kicker = 'Solution' }) => {
  return (
    <section className="page-shell pb-16">
      <div className="layout-container">
        <div className="page-header overflow-hidden px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <span className="label-chip">{kicker}</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 md:text-xl">{subtitle}</p>
            {cta && (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ActionLink href={cta.link} external={cta.external} className="btn-primary h-12 px-8 text-sm md:h-13 md:text-base">
                  {cta.text} <ArrowRight size={17} />
                </ActionLink>
                {cta.secondary && (
                  <ActionLink href={cta.secondary.link} external={cta.secondary.external} className="btn-secondary h-12 px-8 text-sm md:h-13 md:text-base">
                    {cta.secondary.text}
                  </ActionLink>
                )}
              </div>
            )}
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="rounded-2xl border border-surface-border bg-white p-2 shadow-[0_20px_40px_-30px_rgba(56,34,80,0.6)]">
              <div className={`overflow-hidden rounded-xl ${flushPreview ? 'bg-[#68368e]' : 'bg-white'}`}>
                {preview || <img src={image} alt="Product preview" className="block w-full h-auto" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
