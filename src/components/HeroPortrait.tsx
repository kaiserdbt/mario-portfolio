"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

// igual que Arik: imagen sin efectos (ni mascara, ni filtro, ni radius), object-cover,
// y la caja con la proporcion de la propia foto para mostrarla entera sin recortar.
// El fondo de la foto se igualo al de la pagina, asi el rectangulo no se ve, como en Arik.
export default function HeroPortrait({ alt }: { alt: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 670], [0, 110], { clamp: true });

  return (
    <motion.div
      style={{ y }}
      className="relative mx-auto aspect-[1000/1598] w-[300px] max-w-[52%] will-change-transform"
    >
      <Image
        src="/hero-12.webp"
        alt={alt}
        fill
        priority
        unoptimized
        sizes="(min-width: 740px) 390px, 60vw"
        className="object-cover object-center"
      />
    </motion.div>
  );
}
