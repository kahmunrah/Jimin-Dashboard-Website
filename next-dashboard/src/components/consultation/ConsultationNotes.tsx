'use client';

import React, { useState, useEffect } from 'react';
import { DocsIcon, CopyIcon, CloseIcon } from '@/icons';

interface ConsultationNotesProps {
  initialContent: string;
}

const ConsultationNotes: React.FC<ConsultationNotesProps> = ({ initialContent }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (running) {
      interval = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
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
    setSaved(false);
    const handle = setTimeout(() => setSaved(true), 500);
    return () => clearTimeout(handle);
  }, [content, open]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
    }
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex h-full w-full max-w-md flex-col rounded-2xl bg-white shadow-lg dark:bg-gray-900 sm:h-80 sm:w-96">
            <div className="flex items-center justify-between rounded-t-2xl bg-gray-100 p-3 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800 dark:text-white">Eunji&apos;s Consultation Notes</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{formatTime(elapsed)}</span>
                <button
                  onClick={() => setRunning((prev) => !prev)}
                  className="text-sm text-brand-500"
                >
                  {running ? 'Pause' : 'Resume'}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <textarea
              className="flex-1 resize-none bg-transparent p-3 text-sm text-gray-800 dark:text-gray-100 outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="p-2 text-right text-xs text-gray-500 dark:text-gray-400">
              {saved ? 'Saved' : 'Saving...'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationNotes;
