import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import es from '@/i18n/locales/es.json';
import en from '@/i18n/locales/en.json';
import de from '@/i18n/locales/de.json';

type Locale = (typeof routing.locales)[number];

const messages = {
  es,
  en,
  de,
};

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

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLocale = routing.locales.includes(locale as Locale);
  
  if (!isValidLocale) {
    return {};
  }

  const metadata = seoMetadata[locale as Locale];

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    author: metadata.author,
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      ...metadata.openGraph,
      url: `https://mapache.dev/${locale}`,
      images: [
        {
          url: '/images/logo.png',
          width: 1200,
          height: 630,
          alt: metadata.openGraph.title,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      site: '@mapache_dev',
      creator: '@mapache_dev',
      images: ['/images/logo.png'],
    },
    alternates: {
      canonical: `https://mapache.dev/${locale}`,
      languages: {
        'es': 'https://mapache.dev/es',
        'en': 'https://mapache.dev/en',
        'de': 'https://mapache.dev/de',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  const isValidLocale = routing.locales.includes(locale as Locale);
  if (!isValidLocale) {
    notFound();
  }

  // Import messages explicitly for this locale
  const localeKey = locale as Locale;
  const currentMessages = messages[localeKey];

  return (
    <>
      <NextIntlClientProvider messages={currentMessages} locale={locale}>
        <Navbar />
        {children}
      </NextIntlClientProvider>
    </>
  );
}
