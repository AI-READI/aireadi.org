export const FramerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: 'anticipate',
    },
  },
};

export const FramerItem = {
  hidden: { opacity: 0, translateY: 100 },
  show: { opacity: 1, translateY: 0 },
};
