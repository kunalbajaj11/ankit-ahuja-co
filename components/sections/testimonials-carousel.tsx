"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Item = { quote: string; name: string };

type TestimonialsCarouselProps = {
  items: Item[];
};

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 cursor-grab touch-pan-y active:cursor-grabbing">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-[82%] md:basis-[48%] lg:basis-[40%]"
            >
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm lg:min-h-[220px]">
                <p className="text-sm leading-relaxed text-slate-700">“{item.quote}”</p>
                <p className="mt-auto pt-4 text-sm font-semibold text-primary">{item.name}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={prevDisabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-35"
          aria-label="Previous testimonial"
        >
          <span aria-hidden className="text-lg leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={nextDisabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-35"
          aria-label="Next testimonial"
        >
          <span aria-hidden className="text-lg leading-none">
            ›
          </span>
        </button>
      </div>
    </div>
  );
}
