import type { Metadata } from "next";
import { PatientSummary } from "@/components/patient/PatientSummary";
import React from "react";
import IceModelCard from "@/components/patient/IceModelCard";
import PresentingSymptoms from "@/components/patient/PresentingSymptoms";
import SummaryCard from "@/components/patient/SummaryCard";

export const metadata: Metadata = {
  title: "Align | Dashboard",
  description: "Align dashboard home",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PatientSummary />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <SummaryCard />
        <IceModelCard />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Presentation History
      </h2>

      <PresentingSymptoms />
    </div>
  );
}
