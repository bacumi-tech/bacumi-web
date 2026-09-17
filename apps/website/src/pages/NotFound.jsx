import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-shell">
    <section className="layout-container max-w-4xl">
      <div className="page-header px-6 py-14 text-center md:px-10 md:py-20">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-body">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link to="/" className="btn-primary mt-8 h-12 px-7 text-sm">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  </div>
);

export default NotFound;
