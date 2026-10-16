/**
 * Shared utility strings.
 *
 * These mirror the classes the hand-written stylesheet used to define:
 * `.container`, `.section`, `.section__title`, `.section__subtitle`,
 * `.button`, `.button__ghost`.
 */

/** `.container` — max-width 968px with 1rem side margins, auto-centred at 992px. */
export const CONTAINER = 'mx-4 max-w-[968px] lg:mx-auto';

/** `.section` — 4.5rem/1rem padding, 6.5rem/1rem from 992px. */
export const SECTION = 'pt-18 pb-4 lg:pt-26';

/** `.section__title` */
export const SECTION_TITLE =
  'mb-8 text-center text-h2 text-first lg:mb-14';

/** `.section__subtitle` */
export const SECTION_SUBTITLE =
  'block text-center text-smaller text-text-light';

/** `.button` */
export const BUTTON =
  'inline-block rounded-[0.5rem] bg-first px-4 py-3 font-medium text-body [transition:.4s] hover:bg-first-alt hover:text-body light:text-title';

/** `.button__ghost` */
export const BUTTON_GHOST =
  'inline-block rounded-[0.5rem] border-2 border-first bg-transparent px-4 py-3 font-medium text-first [transition:.4s] hover:bg-first-alt hover:text-body light:text-title';
