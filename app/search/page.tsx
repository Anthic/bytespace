import { SearchPage } from "@/src/components/pages/SearchPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Courses | ByteSpace",
  description: "Find Your Next Course - Explore hundreds of courses across design, technology, marketing and creative fields.",
};

export default function Page() {
  return <SearchPage />;
}
