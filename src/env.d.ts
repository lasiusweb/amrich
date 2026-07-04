/// <reference types="astro/client" />

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  openQuoteModal: () => void;
}

declare function gtag(...args: unknown[]): void;
