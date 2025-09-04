"use client";

import React, { useState } from "react";

const SummaryCard: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  const summaryText =
    "Patient’s migraine began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.";

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(at ${pos.x}% ${pos.y}%, rgba(168,85,247,0.25), transparent 60%)`,
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      />
      <div className="relative">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white/90">Summary</h3>
        <p className="text-xl font-semibold leading-snug text-gray-800 dark:text-white">
          {summaryText}
        </p>
      </div>
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SummaryCard;
