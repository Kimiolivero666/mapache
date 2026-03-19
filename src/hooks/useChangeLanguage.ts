import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export const useChangeLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLocale: 'en' | 'es' | 'de') => {
    startTransition(() => {
      // next-intl requiere el pathname y el nuevo locale
      // Esto actualiza la URL y la cookie automáticamente
      router.replace({ pathname }, { locale: newLocale });
    });
  };

  return { changeLanguage, isPending };
};