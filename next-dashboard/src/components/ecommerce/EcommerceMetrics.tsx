"use client";

import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";
import Alert from "@/components/ui/alert/Alert";
import PresentationTabs from "./PresentationTabs";

export const EcommerceMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Metric Item Start (with attached grey footer) */}
      <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] sm:col-span-2">
        {/* White card content */}
        <div className="px-5 pt-5 pb-5 bg-white shadow-default rounded-2xl dark:bg-gray-900 sm:px-6 sm:pt-6 sm:pb-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Sarah Watson 29 F
              </h3>
              <p className="mt-1 text-gray-500 text-theme-xs dark:text-gray-400">
                Submitted today at 8:15 AM
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end text-right">
              <Badge variant="solid" color="warning">
                Clinical need: High
              </Badge>
              <Badge variant="solid" color="info">Medication change</Badge>
              <Badge variant="solid" color="info">Certificate</Badge>
              <Badge variant="solid" color="info">English as second language</Badge>
            </div>
          </div>
        </div>

        {/* Attached grey footer (duplicated style) */}
        <div className="flex items-center justify-center gap-5 px-6 py-3 sm:gap-8 sm:py-4">
          <dt className="rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 text-sm line-clamp-3">
            Patient’s headache began 2 weeks ago, worsening over the duration. Consistent pain with intermittent sharpness. Exacerbates with stress. No nausea or vomiting. Currently takes panadol.
          </dt>
        </div>
      </div>
      {/* Metric Item End */}

      {/* ICE Model Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 sm:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          ICE Model
        </h3>
        <div className="mt-3">
          <Alert
            variant="info"
            message="This Pre-consult was translated from Korean"
            size="sm"
          />
        </div>

        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-3 gap-y-2 items-start md:gap-x-4 md:gap-y-3">
          {/* Idea */}
          <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
            Idea
          </dt>
          <dd className="px-4 py-2 rounded-lg bg-[#465fff] text-white break-words min-w-0">
            I think I&apos;m tired from work and stressed at home, giving me a headache
          </dd>

          {/* Concerns */}
          <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
            Concerns
          </dt>
          <dd className="px-4 py-2 rounded-lg bg-[#465fff] text-white break-words min-w-0">
            I&apos;m worried about potential heart problems
          </dd>

          {/* Expectation */}
          <dt className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 whitespace-nowrap">
            Expectation
          </dt>
          <dd className="px-4 py-2 rounded-lg bg-[#465fff] text-white break-words min-w-0">
            I want reassurance and a medical certificate to take time off of work
          </dd>
        </dl>
      </div>

      {/* Presentations Card */}
      <PresentationTabs />

      {/* Customers Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Customers
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>

      {/* Orders Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            9.05%
          </Badge>
        </div>
      </div>
    </div>
  );
};
