import type { Metadata } from "next";
import { NotFoundPage } from "@/src/components/pages/NotFoundPage";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn’t exist. Try to use a correct url or go back to homepage to start again.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
