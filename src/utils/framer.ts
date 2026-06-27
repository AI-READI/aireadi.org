export const FramerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: 'easeInOut',
    },
  },
};

export const FadeFramerItem = {
  hidden: { opacity: 0, translateY: 100 },
  show: { opacity: 1, translateY: 0 },
};

export const WidthFramerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      ease: 'easeInOut',
    },
  },
};

export const WidthFramerItem = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: 'auto',
    opacity: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

export const FadeFramerItemDelayed = {
  hidden: { opacity: 0, translateY: 100 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 2.3,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
