import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { IBM_Plex_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import es from '@/i18n/locales/es.json';
import en from '@/i18n/locales/en.json';
import de from '@/i18n/locales/de.json';
import { Metadata } from 'next';
import '../globals.css';

// Configuración de la fuente
const ibmPlex = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Locale = (typeof routing.locales)[number];

const messages = {
  es,
  en,
  de,
};

// SEO metadata por idioma
const seoMetadata = {
  es: {
    title: 'MapacheStudio - Desarrollo Web y Diseño UX/UI | Barcelona',
    description: 'MapacheStudio: Desarrollo web profesional en Barcelona. Creamos sitios web a medida, aplicaciones web y soluciones tecnológicas con Next.js, React y diseño UX/UI excepcional.',
    keywords: 'MapacheStudio, desarrollo web Barcelona, diseño UX/UI, Next.js, React, páginas web Barcelona, ecommerce, CMS, Strapi, aplicaciones web, diseño de interfaces, experiencia de usuario, frontend, backend, SEO técnico, consultoría web',
    author: 'MapacheStudio',
    openGraph: {
      title: 'MapacheStudio - Desarrollo Web y Diseño UX/UI en Barcelona',
      description: 'MapacheStudio: Agencia de desarrollo web en Barcelona. Creamos sitios web a medida con Next.js, React y diseño UX/UI profesional.',
      type: 'website',
      locale: 'es_ES',
      siteName: 'MapacheStudio',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MapacheStudio - Desarrollo Web y Diseño UX/UI',
      description: 'MapacheStudio: Desarrollo web profesional en Barcelona. Creamos experiencias digitales excepcionales para tu negocio.',
    },
  },
  en: {
    title: 'MapacheStudio - Web Development & UX/UI Design | Barcelona',
    description: 'MapacheStudio: Professional web development in Barcelona. We create custom websites, web applications and tech solutions with Next.js, React and exceptional UX/UI design.',
    keywords: 'MapacheStudio, web development Barcelona, UX/UI design, Next.js, React, websites Barcelona, ecommerce, CMS, Strapi, web applications, interface design, user experience, frontend, backend, technical SEO, web consulting',
    author: 'MapacheStudio',
    openGraph: {
      title: 'MapacheStudio - Web Development & UX/UI Design in Barcelona',
      description: 'MapacheStudio: Web development agency in Barcelona. We create custom websites with Next.js, React and professional UX/UI design.',
      type: 'website',
      locale: 'en_US',
      siteName: 'MapacheStudio',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MapacheStudio - Web Development & UX/UI Design',
      description: 'MapacheStudio: Professional web development in Barcelona. We create exceptional digital experiences for your business.',
    },
  },
  de: {
    title: 'MapacheStudio - Webentwicklung & UX/UI Design | Barcelona',
    description: 'MapacheStudio: Professionelle Webentwicklung in Barcelona. Wir erstellen maßgeschneiderte Websites, Webanwendungen und Technologielösungen mit Next.js, React und herausragendem UX/UI Design.',
    keywords: 'MapacheStudio, Webentwicklung Barcelona, UX/UI Design, Next.js, React, Webseiten Barcelona, E-Commerce, CMS, Strapi, Webanwendungen, Interface Design, User Experience, Frontend, Backend, technisches SEO, Webberatung',
    author: 'MapacheStudio',
    openGraph: {
      title: 'MapacheStudio - Webentwicklung & UX/UI Design in Barcelona',
      description: 'MapacheStudio: Webentwicklungsagentur in Barcelona. Wir erstellen maßgeschneiderte Websites mit Next.js, React und professionellem UX/UI Design.',
      type: 'website',
      locale: 'de_DE',
      siteName: 'MapacheStudio',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MapacheStudio - Webentwicklung & UX/UI Design',
      description: 'MapacheStudio: Professionelle Webentwicklung in Barcelona. Wir schaffen herausragende digitale Erlebnisse für Ihr Unternehmen.',
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
}): Promise<Metadata> {
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
    authors: [{ name: metadata.author }],
    metadataBase: new URL(`http://localhost:3000/${locale}`),
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' }
      ],
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      ...metadata.openGraph,
      url: `http://localhost:3000/${locale}`,
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
      canonical: `http://localhost:3000/${locale}`,
      languages: {
        'es': 'http://localhost:3000/es',
        'en': 'http://localhost:3000/en',
        'de': 'http://localhost:3000/de',
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

  // Validar locale
  const isValidLocale = routing.locales.includes(locale as Locale);
  if (!isValidLocale) {
    notFound();
  }

  const localeKey = locale as Locale;
  const currentMessages = messages[localeKey];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={ibmPlex.className}>
        <NextIntlClientProvider messages={currentMessages} locale={locale}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}