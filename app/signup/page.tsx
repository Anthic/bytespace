import { RegisterPage } from "@/src/components/pages/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
  description:
    "Join ByteSpace today. The registration process is straightforward, uncomplicated, and efficient.",
};

export default function Signup() {
  return <RegisterPage />;
}
