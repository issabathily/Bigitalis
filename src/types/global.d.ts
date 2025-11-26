interface Window {
  gtag: (
    command: string,
    action: string,
    params?: Record<string, any>
  ) => void;
  dataLayer: any[];
}

declare const gtag: Window['gtag'];
