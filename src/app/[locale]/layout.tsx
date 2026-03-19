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

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
