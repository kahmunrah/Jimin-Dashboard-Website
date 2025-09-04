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
      name: "Minseo Park",
      age: 28,
      gender: "F",
      submittedAt: "8:45 AM",
      tags: ["English as second language"],
      conditions: ["Sore Throat", "Fatigue"],
    },
  },
  {
    time: "9:15 AM",
    patient: {
      name: "Mateo Garcia",
      age: 45,
      gender: "M",
      submittedAt: "8:50 AM",
      tags: ["Certificate"],
      conditions: ["Back Pain"],
    },
  },
  {
    time: "9:30 AM",
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
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
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
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">
          Your Schedule
        </h2>
        <button className="mb-4 text-sm underline text-gray-500">
          view earlier consults
        </button>
        <div className="relative">
          <div className="absolute left-24 top-0 bottom-0 border-l border-gray-200 dark:border-gray-700"></div>
          <ol className="space-y-8">
            {schedule.map((item) => (
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
                <span className="absolute left-[5.75rem] top-4 w-3 h-3 bg-brand-500 rounded-full"></span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
