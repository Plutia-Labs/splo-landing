declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set",
      targetIdOrEventName: string,
      config?: Record<string, unknown>,
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
