import React from 'react';

// Inline replacement for "↗" — that glyph is missing from several default
// system fonts and renders as tofu.
const ArrowUpRight = ({ className = 'w-3 h-3' }) => (
  <svg
    className={`inline-block shrink-0 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default ArrowUpRight;
