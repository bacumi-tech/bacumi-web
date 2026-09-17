import React from 'react';

const SectionHeader = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`section-header ${alignment} ${className}`.trim()}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-lead">{description}</p> : null}
    </div>
  );
};

export default SectionHeader;
