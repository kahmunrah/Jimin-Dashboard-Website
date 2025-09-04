import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align | Sign In",
  description: "Sign in to Align dashboard",
};

export default function SignIn() {
  return <SignInForm />;
}
