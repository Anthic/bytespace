import { CreatorProfilePage } from "@/src/components/pages/CreatorProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators | ByteSpace",
  description:
    "Explore top creators, portfolios, courses, and educational content on ByteSpace.",
};

export default function Page() {
  return <CreatorProfilePage />;
}
