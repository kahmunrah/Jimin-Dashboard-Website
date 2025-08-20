import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import PatientAvatar from "@/components/ecommerce/PatientAvatar";
import PresentationTabs from "@/components/ecommerce/PresentationTabs";

export const metadata: Metadata = {
  title: "Align | Dashboard",
  description: "Align dashboard home",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-5">
        <PatientAvatar />
      </div>

      <div className="col-span-12">
        <PresentationTabs />
      </div>
    </div>
  );
}
