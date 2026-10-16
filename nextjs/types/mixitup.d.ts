declare module 'mixitup' {
  type MixItUpConfig = {
    selectors?: { target?: string };
    animation?: { duration?: number };
  };

  type Mixer = {
    destroy: () => void;
  };

  const mixitup: (
    container: Element | string,
    config?: MixItUpConfig
  ) => Mixer;

  export default mixitup;
}
