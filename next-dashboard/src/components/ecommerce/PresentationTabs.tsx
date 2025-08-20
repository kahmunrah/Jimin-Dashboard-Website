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

  const copyText = selected === "chest" ? chestPainText : headacheText;

  const renderChestPain = () => (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-base text-gray-800 dark:text-white/90">Severity</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">6/10</h4>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-base text-gray-800 dark:text-white/90">Onset</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">Uncertain</h4>
          <p className="mt-2 text-gray-500 text-theme-xs dark:text-gray-400">
            Experienced for more than a few months, uncertain for how long.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-base text-gray-800 dark:text-white/90">Character</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">Stinging pain</h4>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-base text-gray-800 dark:text-white/90">Related Symptoms</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">0 Indicated</h4>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <span className="text-base text-gray-800 dark:text-white/90">Current Management</span>
          <p className="mt-2 text-gray-500 text-theme-xs dark:text-gray-400">No steps taken</p>
        </div>
      </div>
    </div>
  );

  const renderHeadache = () => (
    <div>
      <p className="text-gray-500 dark:text-gray-400">No details available.</p>
    </div>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 sm:col-span-2">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">2 Presentations</h3>
      </div>
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex gap-2">
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
        <button
          onClick={() => copyToClipboard(copyText)}
          className="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          aria-label="Copy presentation details"
        >
          <CopyIcon className="size-4" />
        </button>
      </div>
      {selected === "chest" ? renderChestPain() : renderHeadache()}
    </div>
  );
};

export default PresentationTabs;

