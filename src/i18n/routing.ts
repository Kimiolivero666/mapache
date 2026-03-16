import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Idiomas soportados
  locales: ['es', 'en'],
  // Idioma por defecto
  defaultLocale: 'es',
  // Esto evita que el idioma aparezca en la URL si es el default (opcional)
  localePrefix: 'as-needed' 
});

// Exportamos hooks personalizados que ya conocen nuestros locales
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);