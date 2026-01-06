/* =========================================================
   Core Utilities
   ========================================================= */

// Core utility functions for the design system
// These are framework-agnostic utilities

export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const mergeRefs = <T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> => {
  return (instance: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref && typeof ref === 'object') {
        (ref as React.MutableRefObject<T>).current = instance;
      }
    });
  };
};