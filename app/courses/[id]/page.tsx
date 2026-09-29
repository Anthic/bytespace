import { CourseDetailsPage } from "@/src/components/pages/CourseDetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details | ByteSpace",
  description: "Explore comprehensive course details, curriculum, lessons, and enrollment options.",
};

export default function Page() {
  return <CourseDetailsPage />;
}
