/*
 * Swiper exposes its stylesheets as extensionless subpath exports
 * (`swiper/css`, not `swiper/css/index.css`), so Next's `declare module '*.css'`
 * glob does not match them and Swiper ships no types for these paths.
 * The project already declares its other untyped deps this way — see
 * mixitup.d.ts and scrollreveal.d.ts.
 */
declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/navigation';
declare module 'swiper/css/scrollbar';
declare module 'swiper/css/autoplay';
declare module 'swiper/css/effect-fade';
