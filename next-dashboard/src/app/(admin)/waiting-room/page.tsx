import type { Metadata } from "next";
import PatientCard, { Tag } from "@/components/waiting-room/PatientCard";
import React from "react";

export const metadata: Metadata = {
  title: "Align | Waiting Room",
  description: "Upcoming patients in the waiting room",
};

interface ScheduleItem {
  time: string;
  patient: {
    name: string;
    age: number;
    gender: string;
    submittedAt: string;
    tags: Tag[];
    conditions: string[];
  };
  duration?: number;
}

const schedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    patient: {
      name: "Lucas Wang",
      age: 31,
      gender: "M",
      submittedAt: "8:20 AM",
      tags: ["Follow-up"],
      conditions: ["Knee Pain"],
    },
  },
  {
    time: "9:15 AM",
    patient: {
      name: "Emma Thompson",
      age: 42,
      gender: "F",
      submittedAt: "8:35 AM",
      tags: ["New Patient"],
      conditions: ["Allergic Reaction"],
    },
  },
  {
    time: "9:45 AM",
    patient: {
      name: "Aisha Patel",
      age: 30,
      gender: "F",
      submittedAt: "9:10 AM",
      tags: ["New Patient"],
      conditions: ["Annual Checkup"],
    },
    duration: 30,
  },
  {
    time: "10:00 AM",
    patient: {
      name: "Noah Okafor",
      age: 35,
      gender: "M",
      submittedAt: "9:20 AM",
      tags: ["English as second language"],
      conditions: ["Allergy"],
    },
  },
  {
    time: "10:15 AM",
    patient: {
      name: "Fatima Al-Sayed",
      age: 25,
      gender: "F",
      submittedAt: "9:50 AM",
      tags: ["Certificate"],
      conditions: ["Flu"],
    },
  },
];

export default function WaitingRoom() {
  const [showEarlier, setShowEarlier] = React.useState(false);
  const visibleSchedule = showEarlier ? schedule : schedule.slice(2);

  return (
    <div className="space-y-10 max-w-xl mx-auto">
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4 text-center">
          Next Patient
        </h2>
        <PatientCard
          name="Eunji Lee"
          age={33}
          gender="F"
          submittedAt="8:15 AM"
          tags={[
            { label: "NHIUAU2990", variant: "light", color: "success" },
            "Clinical need: High",
            "Medication change",
            "Certificate",
            "English as second language",
          ]}
          conditions={["Chest Pain", "Migraine"]}
          link="/"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4 text-center">
          Your Schedule
        </h2>
        {!showEarlier && (
          <button
            className="mb-4 text-sm underline text-gray-500"
            onClick={() => setShowEarlier(true)}
          >
            view earlier consults
          </button>
        )}
        <div className="relative">
          <div className="absolute left-28 top-0 bottom-0 border-l border-gray-200 dark:border-gray-700"></div>
          <ol className="space-y-8">
            {visibleSchedule.map((item) => (
              <li
                key={item.time}
                className="relative flex items-start"
                style={{
                  minHeight: item.duration === 30 ? "16rem" : "8rem",
                }}
              >
                <time className="w-24 text-sm text-gray-500">
                  {item.time}
                </time>
                <div className="ml-8 flex-1">
                  <PatientCard {...item.patient} />
                </div>
                <span className="absolute left-[6.75rem] top-4 w-3 h-3 bg-brand-500 rounded-full"></span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
