import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // El matcher debe ser más robusto para ignorar TODO lo que sea un archivo estático
  matcher: [
    // 1. Habilita el i18n para todas las rutas
    // 2. EXCLUYE explícitamente archivos con extensiones (.*\\..*)
    // 3. EXCLUYE carpetas internas de Next.js y Vercel
    '/((?!api|_next|_vercel|.*\\..*).*)',
    
    // 4. Permite que las rutas de i18n funcionen (como /es, /en)
    '/',
    '/(th|en|es)/:path*' // Ajusta los códigos de idioma según tu 'routing'
  ]
};