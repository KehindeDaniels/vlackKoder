"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { asset } from "../../../public/images"; // Adjust path accordingly

const images = [
  asset.lexstar,
  asset.envapp,
  asset.fontier,
  asset.lendsqr,
  asset.envaccord,
  asset.markket,
];

export default function ProjectFloat() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const animation = track.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
        {
          duration: 35000, // slower, more elegant
          iterations: Infinity,
          easing: "linear",
        }
      );
      return () => animation.cancel();
    }
  }, []);

  return (
    <div className="overflow-hidden w-full relative py-10 bg-muted/40 dark:bg-muted/10">
      <div ref={trackRef} className="flex gap-12 w-[200%] items-center">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="shrink-0 w-[320px] h-[200px] relative rounded-xl overflow-hidden shadow-lg bg-muted border border-border"
          >
            <Image
              src={img}
              alt={`project-${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 968px) 80vw, 620px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
