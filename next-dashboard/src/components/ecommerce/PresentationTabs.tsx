"use client";

import React, { useState } from "react";
import { CopyIcon } from "@/icons";

const PresentationTabs: React.FC = () => {
  const [selected, setSelected] = useState<"chest" | "headache">("chest");

  const chestPainText = `Severity: 6/10\nOnset: Uncertain\nExperienced for more than a few months, uncertain for how long.\nCharacter: Stinging pain\nRelated Symptoms: 0 Indicated\nCurrent Management: No steps taken`;
  const headacheText = "No details available.";

  const copyToClipboard = (text: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  const renderChestPain = () => (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => copyToClipboard(chestPainText)}
          className="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          aria-label="Copy chest pain details"
        >
          <CopyIcon className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-sm text-gray-500 dark:text-gray-400">Severity</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">6/10</h4>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-sm text-gray-500 dark:text-gray-400">Onset</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">Uncertain</h4>
          <p className="mt-2 text-gray-500 text-theme-xs dark:text-gray-400">
            Experienced for more than a few months, uncertain for how long.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-sm text-gray-500 dark:text-gray-400">Character</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">Stinging pain</h4>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-sm text-gray-500 dark:text-gray-400">Related Symptoms</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">0 Indicated</h4>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <span className="text-sm text-gray-500 dark:text-gray-400">Current Management</span>
        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">No steps taken</h4>
      </div>
    </div>
  );

  const renderHeadache = () => (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => copyToClipboard(headacheText)}
          className="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          aria-label="Copy headache details"
        >
          <CopyIcon className="size-4" />
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400">No details available.</p>
    </div>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 sm:col-span-2">
      <div className="mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">2 Presentations</span>
      </div>
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setSelected("chest")}
          className={`px-4 py-2 rounded-lg text-sm font-medium focus:outline-none ${
            selected === "chest"
              ? "bg-[#465fff] text-white"
              : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
          }`}
        >
          Chest Pain
        </button>
        <button
          onClick={() => setSelected("headache")}
          className={`px-4 py-2 rounded-lg text-sm font-medium focus:outline-none ${
            selected === "headache"
              ? "bg-[#465fff] text-white"
              : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
          }`}
        >
          Headache
        </button>
      </div>
      {selected === "chest" ? renderChestPain() : renderHeadache()}
    </div>
  );
};

export default PresentationTabs;

