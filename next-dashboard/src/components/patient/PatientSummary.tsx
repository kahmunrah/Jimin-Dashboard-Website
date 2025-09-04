"use client";

import React, { useState } from "react";
import Badge from "../ui/badge/Badge";
import { MoreDotIcon } from "@/icons";
import Alert from "@/components/ui/alert/Alert";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import ConsultationNotes from "@/components/consultation/ConsultationNotes";
import { patient } from "@/data/patient";

const getAge = (dob: string) => {
  const diff = Date.now() - new Date(dob).getTime();
  const ageDt = new Date(diff);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
};

export const PatientSummary: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const age = getAge(patient.date_of_birth);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Metric Item Start (with attached grey footer) */}
      <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
        {/* White card content */}
        <div className="px-5 pt-5 pb-5 bg-white shadow-default rounded-2xl dark:bg-gray-900 sm:px-6 sm:pt-6 sm:pb-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                {patient.first_name} {patient.last_name} {age} {patient.gender}
              </h3>
              <p className="mt-1 text-gray-500 text-theme-xs dark:text-gray-400">
                {patient.ended_at}
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
            </div>
          </div>
          {patient.translated_from && (
            <div className="mt-3">
              <Alert
                variant="info"
                message={`This Pre-consult was translated from ${patient.translated_from}`}
                size="sm"
              />
            </div>
          )}
        </div>
        <div className="mt-3">
          {/* Attached grey footer now shows patient tags */}
          <div className="flex flex-wrap justify-center gap-2 px-6 py-3 sm:gap-3 sm:py-4">
            {[
              {
                label: patient.nhi_number,
                variant: "light" as const,
                color: "success" as const,
              },
              {
                label: `Clinical need: ${patient.clinical_need}`,
                variant: "solid" as const,
                color: "warning" as const,
              },
              ...patient.tags.map((tag) => ({
                label: tag,
                variant: "solid" as const,
                color: "info" as const,
              })),
              {
                label: `ESL: ${patient.preferred_language} preferred`,
                variant: "solid" as const,
                color: "info" as const,
              },
            ].map((badge) => (
              <Badge
                key={badge.label}
                variant={badge.variant}
                color={badge.color}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      {/* Metric Item End */}

      <ConsultationNotes />
    </div>
  );
};
