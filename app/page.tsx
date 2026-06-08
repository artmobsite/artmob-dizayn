import Preloader from "@/components/sections/Preloader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import MaterialExperience from "@/components/sections/MaterialExperience";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ImmersiveShowroom from "@/components/sections/ImmersiveShowroom";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

function Divider() {
  return (
    <div className="relative py-px overflow-hidden pointer-events-none" aria-hidden>
      <div className="h-px w-full gold-rule" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Divider />
      <Collections />
      <Divider />
      <MaterialExperience />
      <Divider />
      <DesignPhilosophy />
      <Divider />
      <FeaturedProducts />
      <Divider />
      <ImmersiveShowroom />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <Footer />
    </main>
  );
}
