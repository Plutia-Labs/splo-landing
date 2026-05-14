declare global {
  interface Window {
    fbq: {
      (
        command: "init" | "track" | "trackCustom" | "consent" | "set",
        targetIdOrEventName: string,
        params?: Record<string, unknown>,
      ): void;
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[];
      loaded: boolean;
      version: string;
      push: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}

export {};
