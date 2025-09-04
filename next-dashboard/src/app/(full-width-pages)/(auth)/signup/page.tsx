import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align | Sign Up",
  description: "Create an Align account",
};

export default function SignUp() {
  return <SignUpForm />;
}
