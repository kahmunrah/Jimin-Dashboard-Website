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
          <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-3 gap-y-2 items-start md:gap-x-4 md:gap-y-3">
            <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
              Severity
            </dt>
            <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
              6/10
            </dd>

            <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
              Onset
            </dt>
            <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
              <div className="font-medium text-gray-800 dark:text-white/90">Uncertain</div>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Experienced for more than a few months, uncertain for how long.
              </p>
            </dd>

            <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
              Character
            </dt>
            <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
              Stinging pain
            </dd>

            <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
              Related Symptoms
            </dt>
            <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
              0 Indicated
            </dd>

            <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
              Current Management
            </dt>
            <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
              No steps taken
            </dd>
          </dl>
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
