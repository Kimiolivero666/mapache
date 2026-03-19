// app/page.tsx
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/Hero/Hero"; 
import MethodSection from "@/components/MethodSection/MethodSection";
import Services from "@/components/Services/Services";
import WhyNext from "@/components/WhyNext/WhyNext";

export default function Home() {
  return (
    /* Añadimos un contenedor con posición relativa 
       para que los z-index de los hijos se comuniquen correctamente.
    */
    <main style={{ position: 'relative' }}> 
      <Hero />
      <Services />
      <FeaturedProjects />
      <MethodSection />
      <WhyNext />
    </main>
  );
}