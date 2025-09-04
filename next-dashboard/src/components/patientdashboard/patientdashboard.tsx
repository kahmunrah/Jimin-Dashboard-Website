import React from "react";
import { DollarLineIcon, TaskIcon } from "@/icons";
import Alert from "@/components/ui/alert/Alert";

interface Metric {
  id: number;
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const metrics: Metric[] = [
  { id: 1, label: "Total Revenue", value: "$74,958", icon: DollarLineIcon },
  { id: 2, label: "Orders", value: "1,469", icon: TaskIcon },
];

const PatientDashboard: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map(({ id, label, value, icon: Icon }) => (
          <div
            key={id}
            className="flex items-center rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <Icon className="h-6 w-6 text-gray-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <Alert variant="info" message="Sales figures are updated daily." />
    </div>
  );
};

export default PatientDashboard;
