"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 sm:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sarah Watson 29 F
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="solid" color="warning">
            Clinical need: High
          </Badge>
          <Badge variant="solid" color="info">
            Medication change
          </Badge>
          <Badge variant="solid" color="info">
            Certificate
          </Badge>
          <Badge variant="solid" color="info">
            English as second language
          </Badge>
        </div>
        {/* Removed Target, Revenue, Today metrics */}
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 sm:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          ICE Model
        </h3>
        <div className="mt-4 grid grid-cols-[max-content,1fr] gap-2 max-[350px]:grid-cols-1">
          <div className="px-4 py-2 rounded-lg bg-[#465fff] text-white">Idea</div>
          <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
            I think I&apos;m tired from work and stressed at home, giving me a headache
          </div>
          <div className="px-4 py-2 rounded-lg bg-[#465fff] text-white">Concern</div>
          <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
            I&apos;m worried about potential heart problems
          </div>
          <div className="px-4 py-2 rounded-lg bg-[#465fff] text-white">Expectation</div>
          <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
            I want reassurance and a medical certificate to take time off of work
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
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
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
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
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
