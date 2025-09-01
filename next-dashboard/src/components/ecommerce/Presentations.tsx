import React from "react";
import Badge from "../ui/badge/Badge";

const Presentations: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Chest Pain</h3>
        <div className="mt-2">
          <Badge variant="solid" color="info">Physical acute</Badge>
        </div>
        <div className="mt-6">
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
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Migraine</h3>
        <div className="mt-2">
          <Badge variant="solid" color="info">Chronic</Badge>
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-4">
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Site</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Head</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Progression</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Consistent</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Interval</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Daily</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Expectation</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Wants medicine change</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Lifestyle</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Sedentary</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Family history</dt>
            <dd className="font-medium text-gray-800 dark:text-white/90">Mother has Migraine</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Presentations;
