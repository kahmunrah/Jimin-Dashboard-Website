import React from "react";
import Badge, { BadgeColor, BadgeVariant } from "@/components/ui/badge/Badge";
import Link from "next/link";

export type Tag =
  | string
  | { label: string; color?: BadgeColor; variant?: BadgeVariant };

export interface PatientCardProps {
  name: string;
  age: number;
  gender: string;
  submittedAt: string;
  tags: Tag[];
  conditions: string[];
  link?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  gender,
  submittedAt,
  tags,
  conditions,
  link,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 pb-5 bg-white shadow-default rounded-2xl dark:bg-gray-900">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              {name} {age} {gender}
            </h3>
            <p className="mt-1 text-gray-500 text-theme-xs dark:text-gray-400">
              Submitted today at {submittedAt}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-wrap gap-2 justify-end text-right">
              {tags.map((tag) =>
                typeof tag === "string" ? (
                  <Badge key={tag} variant="solid" color="info">
                    {tag}
                  </Badge>
                ) : (
                  <Badge
                    key={tag.label}
                    variant={tag.variant ?? "solid"}
                    color={tag.color ?? "info"}
                  >
                    {tag.label}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-start justify-between gap-5 px-6 py-3 sm:gap-8 sm:py-4">
          <div className="rounded-lg bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80 px-4 py-2">
            <ul className="list-disc pl-5 space-y-1">
              {conditions.map((c) => (
                <li key={c} className="text-lg">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          {link && (
            <Link
              href={link}
              className="self-end inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg shadow-theme-xs hover:bg-brand-600"
            >
              view pre-consult
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
