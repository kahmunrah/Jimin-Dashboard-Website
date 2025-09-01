import React from "react";
import Link from "next/link";

interface PatientCardProps {
  name: string;
  age: number;
  submittedAt?: string;
  tags: string[];
  bulletPoints?: string[];
  link?: string;
  className?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  submittedAt,
  tags,
  bulletPoints,
  link,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      <div>
        <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {age} yrs{submittedAt ? ` \u2022 submitted ${submittedAt}` : ""}
        </p>
      </div>
      {bulletPoints && (
        <ul className="mt-3 list-disc pl-5 text-base font-semibold text-gray-700 dark:text-gray-300">
          {bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-white/10 dark:text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <div className="mt-4 text-right">
          <Link href={link} className="text-sm font-medium text-blue-600 underline">
            view pre-consult
          </Link>
        </div>
      )}
    </div>
  );
};

export default PatientCard;

