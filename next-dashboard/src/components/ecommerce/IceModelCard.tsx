import React from "react";

const IceModelCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">ICE Model</h3>
      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-3 gap-y-2 items-start md:gap-x-4 md:gap-y-3">
        <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
          Idea
        </dt>
        <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
          I think I&apos;m tired from work and stressed at home, giving me a migraine
        </dd>

        <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
          Concerns
        </dt>
        <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
          I&apos;m worried about potential heart problems
        </dd>

        <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
          Expectation
        </dt>
        <dd className="px-4 py-2 rounded-lg bg-brand-50 text-brand-500 break-words min-w-0 dark:bg-brand-500/[0.12] dark:text-brand-400">
          I want reassurance and a medical certificate to take time off of work
        </dd>
      </dl>
    </div>
  );
};

export default IceModelCard;
