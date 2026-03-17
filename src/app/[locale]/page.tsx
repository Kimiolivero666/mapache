// app/page.tsx
import Hero from "@/components/Hero/Hero"; 
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    /* Añadimos un contenedor con posición relativa 
       para que los z-index de los hijos se comuniquen correctamente.
    */
    <main style={{ position: 'relative' }}> 
      <Hero />
      <Services />
    </main>
  );
}