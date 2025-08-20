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

  const copyText =
    selected === "chest"
      ? `Chest Pain\n${chestPainText}`
      : `Headache\n${headacheText}`;

  const getButtonClass = (option: "chest" | "headache") =>
    selected === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

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
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">2 Presentations</h3>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            <button
              onClick={() => setSelected("chest")}
              className={`px-3 py-2 font-medium rounded-md text-theme-sm whitespace-nowrap hover:text-gray-900 dark:hover:text-white ${getButtonClass(
                "chest"
              )}`}
            >
              Chest Pain
            </button>
            <button
              onClick={() => setSelected("headache")}
              className={`px-3 py-2 font-medium rounded-md text-theme-sm whitespace-nowrap hover:text-gray-900 dark:hover:text-white ${getButtonClass(
                "headache"
              )}`}
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
      </div>
      {selected === "chest" ? renderChestPain() : renderHeadache()}
    </div>
  );
};

export default PresentationTabs;

