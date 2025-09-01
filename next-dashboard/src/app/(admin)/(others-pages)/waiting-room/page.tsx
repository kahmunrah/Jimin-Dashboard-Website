import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PatientCard from "@/components/waiting-room/PatientCard";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Waiting Room",
  description: "Upcoming patients in the waiting room",
};

const schedule = [
  {
    time: "9:00 AM",
    name: "James Park",
    age: 35,
    submittedAt: "8:50 AM",
    tags: ["English as Second Language"],
    duration: 15,
  },
  {
    time: "9:15 AM",
    name: "Maria Rodriguez",
    age: 42,
    submittedAt: "9:02 AM",
    tags: ["Certificate"],
    duration: 15,
  },
  {
    time: "9:30 AM",
    name: "Wei Chen",
    age: 30,
    submittedAt: "9:10 AM",
    tags: ["New Patient", "English as Second Language"],
    duration: 30,
  },
  {
    time: "10:00 AM",
    name: "Hannah Smith",
    age: 27,
    submittedAt: "9:30 AM",
    tags: ["Certificate"],
    duration: 15,
  },
  {
    time: "10:15 AM",
    name: "Omar Khan",
    age: 54,
    submittedAt: "9:45 AM",
    tags: ["English as Second Language"],
    duration: 15,
  },
];

export default function WaitingRoom() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Waiting Room" />

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
          Next Patient
        </h2>
        <PatientCard
          name="Eunji Lee"
          age={32}
          submittedAt="8:15 AM"
          tags={["English as Second Language", "Certificate"]}
          bulletPoints={["Chest Pain", "Headache"]}
          link="/"
        />
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white/90">
          Your Schedule
        </h2>
        <div className="mb-4 text-sm text-blue-600 underline cursor-pointer">
          view earlier consults
        </div>
        <div className="relative max-h-[500px] overflow-y-auto pl-24">
          <div className="absolute left-20 top-0 bottom-0 w-px bg-gray-200"></div>
          {schedule.map((item) => (
            <div
              key={item.time}
              className={`flex ${item.duration === 30 ? "mb-16" : "mb-8"}`}
            >
              <div className="w-16 pr-4 text-right text-sm text-gray-500 dark:text-gray-400">
                {item.time}
              </div>
              <div className="relative flex-1">
                <span className="absolute -left-[22px] top-2 h-4 w-4 rounded-full bg-blue-500"></span>
                <PatientCard
                  name={item.name}
                  age={item.age}
                  submittedAt={item.submittedAt}
                  tags={item.tags}
                  className={item.duration === 30 ? "h-40" : ""}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

