// app/page.tsx
import ContactUs from "@/components/ContactUs/ContactUs";
import Faq from "@/components/Faq/Faq";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero"; 
import MethodSection from "@/components/MethodSection/MethodSection";
import Services from "@/components/Services/Services";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyNext from "@/components/WhyNext/WhyNext";

export default function Home() {
  return (
    /* Añadimos un contenedor con posición relativa 
       para que los z-index de los hijos se comuniquen correctamente.
    */
    <main style={{ position: 'relative' }}> 
      <Hero />
      <div id="services"><Services /></div>
      <div id="projects"><FeaturedProjects /></div>
      <div id="about"><MethodSection /></div>
      <WhyNext />
      <Testimonials />
      <TechStack />
      <Faq />
      <div id="contact"><ContactUs /></div>
      <Footer />
    </main>
  );
}