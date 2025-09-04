"use client";

import React, { useState, useEffect } from "react";
import { DocsIcon, CopyIcon, CloseIcon, PencilIcon } from "@/icons";
import { patient } from "@/data/patient";

interface PresentationField {
  label: string;
  text: string;
}

const ConsultationNotes: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [tags, setTags] = useState<string[]>([...patient.tags]);
  const [editingTag, setEditingTag] = useState<number | null>(null);
  const [patientSummary, setPatientSummary] = useState(patient.chief_complaint);
  const [iceSummary, setIceSummary] = useState(
    `Idea: ${patient.ice.idea}\nConcerns: ${patient.ice.concern}\nExpectation: ${patient.ice.expectation}`
  );
  const [presentations, setPresentations] = useState<PresentationField[]>(
    patient.presenting_symptoms.map((sym) => ({
      label: sym.label,
      text: sym.notes,
    }))
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (running) {
      interval = setInterval(() => setElapsed((prev) => prev + 1), 1000);
    }
    return () => interval && clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (open) {
      setRunning(true);
    } else {
      setRunning(false);
      setElapsed(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const copyText = (text: string) => {
    navigator.clipboard?.writeText(text);
  };

  const pasteText = async (setter: (text: string) => void) => {
    if (navigator.clipboard) {
      const t = await navigator.clipboard.readText();
      setter(t);
    }
  };

  const updateTag = (index: number, value: string) => {
    setTags((prev) => prev.map((t, i) => (i === index ? value : t)));
  };

  const removeTag = (index: number) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const updatePresentation = (index: number, value: string) => {
    setPresentations((prev) =>
      prev.map((p, i) => (i === index ? { ...p, text: value } : p))
    );
  };

  const copyAll = () => {
    const tagText = tags.join(", ");
    const presentationText = presentations
      .map((p) => `${p.label}\n${p.text}`)
      .join("\n\n");
    const all = `${patient.first_name} ${patient.last_name}\nTags: ${tagText}\n\nPatient Summary:\n${patientSummary}\n\nICE Summary:\n${iceSummary}\n\n${presentationText}`;
    navigator.clipboard?.writeText(all);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-white shadow-lg"
        >
          <DocsIcon className="h-5 w-5" />
          <span>Start Consultation</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 p-4 sm:p-8">
          <div className="relative flex h-full w-full flex-col overflow-y-auto rounded-2xl bg-white shadow-lg dark:bg-gray-900">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close consultation notes"
              className="absolute top-4 right-4 rounded bg-red-600 px-3 py-2 text-sm text-white"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-between rounded-t-2xl bg-gray-100 p-4 pr-12 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800 dark:text-white">Eunji&apos;s Consultation Notes</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{formatTime(elapsed)}</span>
                <button
                  onClick={() => setRunning((prev) => !prev)}
                  className="text-sm text-brand-500"
                >
                  {running ? "Pause" : "Resume"}
                </button>
              </div>
              <button
                onClick={copyAll}
                className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white"
              >
                Finish presentation + copy all
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
                  {patient.first_name} {patient.last_name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center rounded bg-gray-100 px-2 py-1 dark:bg-gray-800"
                    >
                      {editingTag === i ? (
                        <input
                          value={tag}
                          onChange={(e) => updateTag(i, e.target.value)}
                          onBlur={() => setEditingTag(null)}
                          className="bg-transparent text-sm outline-none"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm">{tag}</span>
                      )}
                      <button
                        onClick={() =>
                          setEditingTag((prev) => (prev === i ? null : i))
                        }
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <PencilIcon className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeTag(i)}
                        className="ml-1 text-red-500 hover:text-red-600"
                      >
                        <CloseIcon className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <label className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
                  Patient Summary
                </label>
                <textarea
                  className="w-full rounded border border-gray-200 bg-white p-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 min-h-[120px]"
                  value={patientSummary}
                  onChange={(e) => setPatientSummary(e.target.value)}
                />
                <div className="absolute top-3 right-2 flex gap-1">
                  <button
                    onClick={() => copyText(patientSummary)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <CopyIcon className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => pasteText(setPatientSummary)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <DocsIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <label className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
                  ICE Summary
                </label>
                <textarea
                  className="w-full rounded border border-gray-200 bg-white p-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 min-h-[120px]"
                  value={iceSummary}
                  onChange={(e) => setIceSummary(e.target.value)}
                />
                <div className="absolute top-3 right-2 flex gap-1">
                  <button
                    onClick={() => copyText(iceSummary)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <CopyIcon className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => pasteText(setIceSummary)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <DocsIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {presentations.map((p, i) => (
                <div key={p.label} className="relative">
                  <label className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
                    {p.label}
                  </label>
                  <textarea
                    className="w-full rounded border border-gray-200 bg-white p-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 min-h-[120px]"
                    value={p.text}
                    onChange={(e) => updatePresentation(i, e.target.value)}
                  />
                  <div className="absolute top-3 right-2 flex gap-1">
                    <button
                      onClick={() => copyText(p.text)}
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <CopyIcon className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => pasteText((t) => updatePresentation(i, t))}
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <DocsIcon className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationNotes;
