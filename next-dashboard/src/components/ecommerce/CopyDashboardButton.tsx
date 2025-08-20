"use client";

import { CopyIcon } from "@/icons";
import Button from "@/components/ui/button/Button";

export default function CopyDashboardButton() {
  const handleCopy = () => {
    const dashboard = document.getElementById("dashboard-content");
    if (dashboard) {
      const clone = dashboard.cloneNode(true) as HTMLElement;
      const avatar = clone.querySelector("[data-patient-avatar]");
      if (avatar) {
        avatar.remove();
      }
      const text = clone.innerText;
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      startIcon={<CopyIcon className="w-4 h-4" />}
    >
      <span className="sr-only">Copy dashboard text</span>
    </Button>
  );
}
