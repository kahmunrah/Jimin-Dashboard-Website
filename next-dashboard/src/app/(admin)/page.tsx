import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import IceModelCard from "@/components/ecommerce/IceModelCard";
import Presentations from "@/components/ecommerce/Presentations";

export const metadata: Metadata = {
  title: "Align | Dashboard",
  description: "Align dashboard home",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 lg:col-span-6">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12 lg:col-span-6 flex">
        <IceModelCard />
      </div>

      <div className="col-span-12">
        <Presentations />
      </div>
    </div>
  );
}
