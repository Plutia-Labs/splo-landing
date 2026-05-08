"use client";

import { useEffect, useRef, useState } from "react";

const NAV_HEIGHT = 64;

export type Slide = {
  caption: React.ReactNode;
  label: string;
  card: React.ReactNode;
};

export function MobileStickyCarousel({
  step,
  title,
  slides,
}: {
  step: string;
  title: React.ReactNode;
  slides: Slide[];
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [vh, setVh] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const cardCount = slides.length;
  const stickyH = vh > 0 ? vh - NAV_HEIGHT : 0;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const sH = window.innerHeight - NAV_HEIGHT;
      const total = rect.height - sH;
      const scrolled = NAV_HEIGHT - rect.top;
      const p = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      setVh(window.innerHeight);
      update();
    };

    setVh(window.innerHeight);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const activeIndex = Math.min(
    cardCount - 1,
    Math.floor(progress * cardCount + 0.0001)
  );

  return (
    <div
      ref={wrapperRef}
      className="md:hidden relative"
      style={{
        height:
          stickyH > 0
            ? `${cardCount * stickyH}px`
            : `calc(${cardCount * 100}vh - ${cardCount * NAV_HEIGHT}px)`,
      }}
    >
      <div
        className="sticky top-16 overflow-hidden flex flex-col"
        style={{
          height:
            stickyH > 0 ? `${stickyH}px` : `calc(100vh - ${NAV_HEIGHT}px)`,
        }}
      >
        <div className="text-center px-5 pt-16 shrink-0">
          <span className="inline-block text-sm font-semibold text-brand-700">
            {step}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="flex-1 mt-12 flex overflow-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${progress * (cardCount - 1) * 100}vw)`,
              width: `${cardCount * 100}vw`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`shrink-0 h-full grid grid-rows-[0.6fr_auto_1.4fr] justify-items-center ${
                  i === 0 ? "pl-8 pr-5" : "px-5"
                }`}
                style={{ width: "100vw" }}
              >
                <p className="self-end mb-6 text-base font-bold text-slate-600 text-center max-w-[300px] leading-snug">
                  {slide.caption}
                </p>
                <div className="flex items-center justify-center">
                  {slide.card}
                </div>
                <p className="self-start mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {slide.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-4 shrink-0">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-brand-500" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
