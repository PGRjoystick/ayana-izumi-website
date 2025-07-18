import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <Hero />
      <Features />
      <Gallery />
      <SocialLinks />
      <Footer />
    </main>
  );
}
