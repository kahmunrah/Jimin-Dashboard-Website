import React from "react";
import Badge from "../ui/badge/Badge";
import { AlertIcon } from "@/icons";
import { patient } from "@/data/patient";

interface SymptomDetail {
  term: string;
  detail: string;
  subDetail?: string;
}

const PresentingSymptoms: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {patient.presenting_symptoms.map((symptom) => (
        <div
          key={symptom.label}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {symptom.label}
            {symptom.is_red_flag && (
              <AlertIcon className="inline-block ml-2 text-red-500" />
            )}
          </h3>
          <div className="mt-2">
            <Badge variant="solid" color="info">
              {symptom.type}
            </Badge>
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-4">
            {symptom.details.map((detail: SymptomDetail) => (
              <div key={detail.term}>
                <dt className="text-gray-500 dark:text-gray-400">
                  {detail.term}
                </dt>
                <dd className="font-medium text-gray-800 dark:text-white/90">
                  {detail.detail}
                  {detail.subDetail && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {detail.subDetail}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
};

export default PresentingSymptoms;
