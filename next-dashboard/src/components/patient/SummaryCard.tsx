"use client";

import React from "react";

const SummaryCard: React.FC = () => {

  const summaryText =
    "Patient’s migraine began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.";

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 summary-card">
      <span className="shimmer"></span>
      <div className="relative">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white/90">Summary</h3>
        <p className="text-xl font-semibold leading-snug text-gray-800 dark:text-white">
          {summaryText}
        </p>
      </div>
      <style jsx>{`
        .summary-card {
          position: relative;
          background-image: linear-gradient(
            315deg,
            hsl(213deg 95% 91%) 0%,
            hsl(248deg 100% 86%) 47%,
            hsl(293deg 78% 89%) 100%
          );
          box-shadow: 0 2px 3px 1px hsl(222deg 50% 20% / 50%);
        }
        .shimmer {
          position: absolute;
          inset: -40px;
          border-radius: inherit;
          pointer-events: none;
          mix-blend-mode: plus-lighter;
          mask-image: conic-gradient(
            from var(--mask, 0deg),
            transparent 0%,
            transparent 10%,
            black 36%,
            black 45%,
            transparent 50%,
            transparent 60%,
            black 85%,
            black 95%,
            transparent 100%
          );
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          0% { --mask: 0deg; }
          100% { --mask: 360deg; }
        }
      `}</style>
    </div>
  );
};

export default SummaryCard;
