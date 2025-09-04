import type { Metadata } from "next";
import { PatientSummary } from "@/components/patient/PatientSummary";
import React from "react";
import IceModelCard from "@/components/patient/IceModelCard";
import PresentingSymptoms from "@/components/patient/PresentingSymptoms";

export const metadata: Metadata = {
  title: "Align | Dashboard",
  description: "Align dashboard home",
};

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 lg:col-span-6">
        <PatientSummary />
      </div>

      <div className="col-span-12 lg:col-span-6 flex">
        <IceModelCard />
      </div>

      <div className="col-span-12">
        <PresentingSymptoms />
      </div>
    </div>
  );
}
