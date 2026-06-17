import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 exige declarar las calidades usadas en next/image; 90 para las fotos de servicios
    qualities: [75, 90],
  },
  // permite un build aislado (BUILD_DIST=.next-perf npm run build) sin pisar el .next del dev en marcha
  ...(process.env.BUILD_DIST ? { distDir: process.env.BUILD_DIST } : {}),
};

export default nextConfig;
