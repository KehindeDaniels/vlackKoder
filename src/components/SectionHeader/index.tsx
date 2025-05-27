"use client";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div
      className="mb-12 text-center px-4"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
        {/* Left Line */}
        <div className="h-px w-full sm:max-w-[120px] bg-gradient-to-r from-transparent via-muted-foreground to-muted-foreground/10" />

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted-foreground px-2 sm:px-0 text-center">
          {subtitle}
        </p>

        {/* Right Line */}
        <div className="h-px w-full sm:max-w-[120px] bg-gradient-to-l from-transparent via-muted-foreground to-muted-foreground/10" />
      </div>
    </div>
  );
}
