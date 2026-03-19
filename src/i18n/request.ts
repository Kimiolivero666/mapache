import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';

const messages = {
  es,
  en,
  de
};

export default getRequestConfig(async ({locale}) => {
  const validLocale = (locale || 'es') as typeof routing.locales[number];
  return {
    locale: validLocale,
    messages: messages[validLocale]
  };
});
