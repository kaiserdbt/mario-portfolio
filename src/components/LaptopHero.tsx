"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

function Placeholder() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src="/services/hero-hd.webp"
        alt="Webs, SaaS y automatización"
        width={2000}
        height={1244}
        sizes="(max-width: 1024px) 92vw, 1024px"
        className="h-auto w-full max-w-3xl"
        priority
      />
    </div>
  );
}

const LaptopScene = dynamic(() => import("./LaptopScene"), {
  ssr: false,
  loading: () => <Placeholder />,
});

export default function LaptopHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progress.current = v;
  });

  return (
    <div ref={trackRef} className="relative h-[125vh] w-full">
      <div className="sticky top-0 flex h-[82vh] items-center justify-center">
        {/* charco de luz cálido que despega el portátil del fondo negro */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 42% at 50% 46%, rgba(218,197,167,0.14), rgba(217,184,127,0.05) 40%, transparent 72%)",
          }}
        />
        <div className="relative h-full w-full max-w-5xl">
          <LaptopScene progressRef={progress} />
        </div>
      </div>
    </div>
  );
}
