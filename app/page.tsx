import { Hero } from "@/src/components/sections/Hero";
import { Partners } from "@/src/components/sections/Partners";
import { FeaturedCourses } from "@/src/components/sections/FeaturedCourses";
import { CategoriesShowcase } from "@/src/components/sections/CategoriesShowcase";
import { FeaturesHighlight } from "@/src/components/sections/FeaturesHighlight";
import { CreatorCTA } from "@/src/components/sections/CreatorCTA";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Footer } from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-primary-blue text-white selection:bg-electric-lime selection:text-dark overflow-x-hidden">
      <Hero />
      <Partners />
      <FeaturedCourses />
      <CategoriesShowcase />
      <FeaturesHighlight />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}



