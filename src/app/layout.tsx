import { ReactNode } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';
import './globals.css';

const ibmPlex = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// SEO metadata por idioma
const seoMetadata = {
  es: {
    title: 'Mapache - Desarrollo Web y Diseño UX/UI | Madrid',
    description: 'Creamos experiencias digitales excepcionales que impulsan tu negocio hacia el éxito. Desarrollo web a medida, diseño UX/UI y soluciones tecnológicas innovadoras.',
    keywords: 'desarrollo web, diseño UX/UI, Next.js, React, Madrid, páginas web, ecommerce, CMS, Strapi, aplicaciones web, diseño de interfaces, experiencia de usuario, frontend, backend, SEO técnico, consultoría web',
    author: 'Mapache',
    openGraph: {
      title: 'Mapache - Desarrollo Web y Diseño UX/UI en Madrid',
      description: 'Agencia de desarrollo web y diseño UX/UI. Creamos sitios web a medida con Next.js y React.',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Mapache',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mapache - Desarrollo Web y Diseño UX/UI',
      description: 'Creamos experiencias digitales excepcionales para tu negocio.',
    },
  },
  en: {
    title: 'Mapache - Web Development & UX/UI Design | Barcelona',
    description: 'We create exceptional digital experiences that drive your business towards success. Custom web development, UX/UI design, and innovative tech solutions.',
    keywords: 'web development, UX/UI design, Next.js, React, Barcelona, websites, ecommerce, CMS, Strapi, web applications, interface design, user experience, frontend, backend, technical SEO, web consulting',
    author: 'Mapache',
    openGraph: {
      title: 'Mapache - Web Development & UX/UI Design in Barcelona',
      description: 'Web development and UX/UI design agency. We create custom websites with Next.js and React.',
      type: 'website',
      locale: 'en_US',
      siteName: 'Mapache',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mapache - Web Development & UX/UI Design',
      description: 'We create exceptional digital experiences for your business.',
    },
  },
  de: {
    title: 'Mapache - Webentwicklung & UX/UI Design | Barcelona',
    description: 'Wir schaffen herausragende digitale Erlebnisse, die Ihr Unternehmen zum Erfolg führen. Maßgeschneiderte Webentwicklung, UI/UX-Design und innovative Technologielösungen.',
    keywords: 'Webentwicklung, UX/UI Design, Next.js, React, Barcelona, Webseiten, E-Commerce, CMS, Strapi, Webanwendungen, Interface Design, User Experience, Frontend, Backend, technisches SEO, Webberatung',
    author: 'Mapache',
    openGraph: {
      title: 'Mapache - Webentwicklung & UX/UI Design in Barcelona',
      description: 'Webentwicklungs- und UX/UI Design Agentur. Wir erstellen maßgeschneiderte Websites mit Next.js und React.',
      type: 'website',
      locale: 'de_DE',
      siteName: 'Mapache',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mapache - Webentwicklung & UX/UI Design',
      description: 'Wir schaffen herausragende digitale Erlebnisse für Ihr Unternehmen.',
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={ibmPlex.className}>
        {children}
      </body>
    </html>
  );
}