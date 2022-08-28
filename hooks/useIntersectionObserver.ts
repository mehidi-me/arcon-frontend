import React from 'react';

interface Params {
  root?: any;
  target?: any;
  onIntersect?: any;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean | undefined;
}

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1,
  rootMargin = '0px',
  enabled = true,
}: Params) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [enabled, root, rootMargin, threshold, target, onIntersect]);
}
