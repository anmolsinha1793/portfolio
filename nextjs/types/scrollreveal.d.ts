declare module 'scrollreveal' {
  type RevealOptions = {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    [key: string]: unknown;
  };

  type ScrollRevealInstance = {
    reveal: (target: string | Element, options?: RevealOptions) => void;
    destroy: () => void;
  };

  const ScrollReveal: (options?: RevealOptions) => ScrollRevealInstance;

  export default ScrollReveal;
}
