import { LoginPage } from "@/src/components/pages/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description:
    "Sign in to ByteSpace. Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

export default function Login() {
  return <LoginPage />;
}
