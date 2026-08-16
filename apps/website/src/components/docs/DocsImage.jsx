import React from 'react';

const DocsImage = ({ src, alt }) => (
  <figure className="docs-image">
    <img src={src} alt={alt} loading="lazy" />
  </figure>
);

export default DocsImage;
