import { useEffect, useMemo, useRef, useState } from 'react';
import { useIntersection, useWindowScroll, useWindowSize } from 'react-use';

export function ScrollReveal({
  children,
  className,
  once = false,
  trigger = 'visible',
  offset = 0,
  as: Component = 'div',
  ...props
}) {
  const container = useRef(null);

  const { y: windowScroll } = useWindowScroll();
  const { height: windowHeight } = useWindowSize();

  const intersection = useIntersection(container, {
    threshold: 0,
  });

  const isIntersecting = useMemo(() => {
    if (container.current) {
      const y = container.current.getBoundingClientRect().top;
      const { height } = container.current.getBoundingClientRect();

      if (trigger == 'top') {
        return intersection.isIntersecting && y <= 0;
      } else if (trigger == 'middle') {
        return y > windowHeight / 2 - height && y <= windowHeight / 2;
      }

      return intersection.isIntersecting && y <= windowHeight - offset;
    }

    return false;
  }, [windowScroll]);

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (once && isIntersecting) {
      setActive(true);
    } else if (!once) {
      setActive(isIntersecting);
    }
  }, [isIntersecting, once]);

  return (
    <Component ref={container} className={className} {...props}>
      {children(isActive)}
    </Component>
  );
}
