"use client";

import Image from "next/image";
import { asset } from "@/../public/images";
import { SiFigma, SiAdobephotoshop } from "react-icons/si";

export default function MyDesigns() {
  const designImages = [
    { src: asset.lexstar, colSpan: "md:col-span-2" },
    { src: asset.lendsqr, colSpan: "" },
    { src: asset.envaccord, colSpan: "" },
    { src: asset.envapp, colSpan: "md:col-span-2" },
    { src: asset.fontier, colSpan: "" },
    { src: asset.markket, colSpan: "" },
  ];

  return (
    <section
      id="designs"
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Designs</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A showcase of selected UI work — bold, minimal, and user-driven.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          {designImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden border border-border bg-card shadow-md ${
                img.colSpan
              } row-span-1 md:row-span-${idx % 3 === 0 ? 2 : 1}`}
            >
              <Image
                src={img.src}
                alt={`Design ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Tool Icons */}
        <div className="mt-12 flex justify-center gap-6 text-4xl text-muted-foreground">
          <SiFigma title="Figma" />
          <SiAdobephotoshop title="Photoshop" />
        </div>
      </div>
    </section>
  );
}
