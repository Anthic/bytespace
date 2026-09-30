import { CreatorProfilePage } from "@/src/components/pages/CreatorProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Profile | ByteSpace",
  description:
    "Explore creator portfolio, courses, products, and insights on ByteSpace.",
};

export default function Page() {
  return <CreatorProfilePage />;
}
