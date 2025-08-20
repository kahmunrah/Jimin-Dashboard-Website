"use client";

import { Dropdown } from "../ui/dropdown/Dropdown";
import { MoreDotIcon } from "@/icons";
import React, { useState, useRef, useEffect } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import Image from "next/image";

export default function PatientAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"front" | "back">("front");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateHeight() {
      const card = cardRef.current;
      const iceCard = document.getElementById("ice-model-card");
      if (card && iceCard) {
        const cardTop = card.getBoundingClientRect().top;
        const iceBottom = iceCard.getBoundingClientRect().bottom;
        const height = iceBottom - cardTop;
        card.style.height = `${height}px`;
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    function updateHeight() {
      if (imageRef.current) {
        const top = imageRef.current.getBoundingClientRect().top;
        const height = window.innerHeight - top - 20; // 20px bottom offset
        setImageHeight(`${height}px`);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  function toggleDropdown(e: React.MouseEvent) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function toggleView(option: "front" | "back") {
    setView(option);
  }

  function getButtonClass(option: "front" | "back") {
    return view === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6 h-full flex flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Patient Avatar
            </h3>
          </div>
          <div className="flex items-start gap-3">
            <div
              className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleView("front");
                }}
                className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass(
                  "front"
                )}`}
              >
                Front
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleView("back");
                }}
                className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass(
                  "back"
                )}`}
              >
                Back
              </button>
            </div>
            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
              <button onClick={toggleDropdown} className="dropdown-toggle">
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
              </button>
              <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="w-40 p-2"
              >
                <DropdownItem
                  tag="a"
                  onItemClick={closeDropdown}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  View More
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  onItemClick={closeDropdown}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Delete
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="mt-6 relative w-full flex-grow">
          <Image
            src={
              view === "front"
                ? "/images/patient-avatar/patient-avatar-front.svg"
                : "/images/patient-avatar/patient-avatar-front.svg"
            }
            alt="Patient avatar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

