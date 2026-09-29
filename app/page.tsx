import { Hero } from "@/src/components/sections/Hero";
import { Partners } from "@/src/components/sections/Partners";
import { FeaturedCourses } from "@/src/components/sections/FeaturedCourses";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-primary-blue text-white selection:bg-electric-lime selection:text-dark overflow-x-hidden">
      <Hero />
      <Partners />
      <FeaturedCourses />
    </main>
  );
}


