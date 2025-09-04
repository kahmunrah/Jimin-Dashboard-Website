import type { Metadata } from "next";
import WaitingRoomClient from "./WaitingRoomClient";

export const metadata: Metadata = {
  title: "Align | Waiting Room",
  description: "Upcoming patients in the waiting room",
};

export default function WaitingRoomPage() {
  return <WaitingRoomClient />;
}
