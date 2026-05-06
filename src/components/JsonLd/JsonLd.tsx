"use client";

interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MapacheStudio",
    "description": locale === 'es' 
      ? "Agencia de desarrollo web profesional en Barcelona. Especializados en Next.js, React, diseño UX/UI y soluciones tecnológicas a medida."
      : locale === 'en'
      ? "Professional web development agency in Barcelona. Specialized in Next.js, React, UX/UI design and custom tech solutions."
      : "Professionelle Webentwicklungsagentur in Barcelona. Spezialisiert auf Next.js, React, UX/UI Design und maßgeschneiderte Technologielösungen.",
    "url": "https://mapachestudio.com",
    "telephone": "+34 62 355 01 30",
    "email": "hello@mapachestudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressCountry": "ES",
      "postalCode": "08001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3851,
      "longitude": 2.1734
    },
    "areaServed": {
      "@type": "Place",
      "name": "Barcelona"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'es' 
        ? "Servicios de Desarrollo Web"
        : locale === 'en'
        ? "Web Development Services"
        : "Webentwicklung Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'es' 
              ? "Desarrollo Web a Medida"
              : locale === 'en'
              ? "Custom Web Development"
              : "Maßgeschneiderte Webentwicklung",
            "description": locale === 'es'
              ? "Desarrollo de sitios web y aplicaciones web personalizadas con Next.js y React"
              : locale === 'en'
              ? "Custom website and web application development with Next.js and React"
              : "Maßgeschneiderte Website- und Webanwendungsentwicklung mit Next.js und React"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'es'
              ? "Diseño UX/UI"
              : locale === 'en'
              ? "UX/UI Design"
              : "UX/UI Design",
            "description": locale === 'es'
              ? "Diseño de interfaces de usuario intuitivas y experiencias digitales excepcionales"
              : locale === 'en'
              ? "Intuitive user interface design and exceptional digital experiences"
              : "Intuitive Benutzeroberflächengestaltung und herausragende digitale Erlebnisse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'es'
              ? "Integración CMS"
              : locale === 'en'
              ? "CMS Integration"
              : "CMS Integration",
            "description": locale === 'es'
              ? "Integración de sistemas de gestión de contenido como Strapi para autogestión"
              : locale === 'en'
              ? "Content management system integration like Strapi for self-management"
              : "Content-Management-System-Integration wie Strapi für Selbstverwaltung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'es'
              ? "Consultoría SEO"
              : locale === 'en'
              ? "SEO Consulting"
              : "SEO Beratung",
            "description": locale === 'es'
              ? "Optimización técnica y SEO para mejorar el posicionamiento en buscadores"
              : locale === 'en'
              ? "Technical optimization and SEO to improve search engine rankings"
              : "Technische Optimierung und SEO zur Verbesserung der Suchmaschinenplatzierung"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://instagram.com/mapachestudio",
      "https://linkedin.com/company/mapachestudio",
      "https://github.com/mapachestudio"
    ],
    "serviceType": locale === 'es'
      ? "Desarrollo Web y Diseño UX/UI"
      : locale === 'en'
      ? "Web Development and UX/UI Design"
      : "Webentwicklung und UX/UI Design"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0)
      }}
    />
  );
}
