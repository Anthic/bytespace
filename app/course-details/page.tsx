import { CourseDetailsPage } from "@/src/components/pages/CourseDetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide | ByteSpace",
  description:
    "Unlock the Power of Digital Creation with Expert Guidance by purepearl studio. Comprehensive 112 lessons guide.",
};

export default function Page() {
  return <CourseDetailsPage />;
}
