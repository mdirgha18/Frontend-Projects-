// src/hooks/useFocusTrap.tsx
import { useEffect } from 'react';

export function useFocusTrap(ref: React.RefObject<HTMLElement>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const focusableSelectors = [
      'a[href]',
      'button',
      'textarea',
      'input',
      'select',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const focusableEls = Array.from(ref.current.querySelectorAll<HTMLElement>(focusableSelectors));

    if (focusableEls.length > 0) {
      focusableEls[0].focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusable = focusableEls;
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [ref, active]);
}
