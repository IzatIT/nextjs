import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['kg', 'ru'],
    defaultLocale: 'ru'
});
export const config = {
    matcher: ['/', '/(ru|kg)/:path*']
};