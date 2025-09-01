"use client";

import React, { useState } from "react";
import Badge from "../ui/badge/Badge";
import { MoreDotIcon } from "@/icons";
import Alert from "@/components/ui/alert/Alert";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import ConsultationNotes from "@/components/consultation/ConsultationNotes";
import { chestPainText, migraineText } from "@/data/presentations";

export const EcommerceMetrics: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const initialNotes = `Eunji Lee 33 F
Tags: NHI: NHIUAU2990, Clinical need: High, Medication change, Certificate, English as second language

Patient’s migraine began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.

Idea: I think I'm tired from work and stressed at home, giving me a migraine
Concerns: I'm worried about potential heart problems
Expectation: I want reassurance and a medical certificate to take time off of work

Chest Pain
${chestPainText}

Migraine
${migraineText}`;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Metric Item Start (with attached grey footer) */}
      <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
        {/* White card content */}
        <div className="px-5 pt-5 pb-5 bg-white shadow-default rounded-2xl dark:bg-gray-900 sm:px-6 sm:pt-6 sm:pb-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Eunji Lee 33 F
              </h3>
              <p className="mt-1 text-gray-500 text-theme-xs dark:text-gray-400">
                Submitted today at 8:15 AM
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="relative inline-block">
                <button
                  onClick={toggleMenu}
                  className="dropdown-toggle text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <MoreDotIcon />
                </button>
                <Dropdown isOpen={isMenuOpen} onClose={closeMenu} className="w-40 p-2">
                  <DropdownItem
                    onItemClick={closeMenu}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                  >
                    Export as PDF
                  </DropdownItem>
                  <DropdownItem
                    onItemClick={closeMenu}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                  >
                    Copy All
                  </DropdownItem>
                </Dropdown>
              </div>
              <div className="flex flex-wrap gap-2 justify-end text-right">
                <Badge variant="light" color="success">NHIUAU2990</Badge>
                <Badge variant="solid" color="warning">Clinical need: High</Badge>
                <Badge variant="solid" color="info">Medication change</Badge>
                <Badge variant="solid" color="info">Certificate</Badge>
                <Badge variant="solid" color="info">English as second language</Badge>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Alert
              variant="info"
              message="This Pre-consult was translated from Korean"
              size="sm"
            />
          </div>
        </div>
        <div className="mt-3">
          {/* Attached grey footer (duplicated style) */}
          <div className="flex items-center justify-center gap-5 px-6 py-3 sm:gap-8 sm:py-4">
            <dt className="rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 text-sm line-clamp-3">
              Patient’s migraine began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.
            </dt>
          </div>
        </div>
      </div>
      {/* Metric Item End */}

      <ConsultationNotes initialContent={initialNotes} />
    </div>
  );
};
