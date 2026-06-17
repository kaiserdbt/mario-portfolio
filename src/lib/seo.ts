import type { Metadata } from "next";
import { profile } from "@/data/profile";

// el dominio real lo pongo en NEXT_PUBLIC_SITE_URL
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? profile.portfolioUrl;

export const siteDescription =
  "Portfolio de Mario Cava Avila, ingeniero de software full-stack. Construyo SaaS B2B multi-tenant, plataformas de SEO programático e integraciones de IA, con seguridad, pruebas y CI/CD, de la base de datos al despliegue.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: `${profile.name} · Portfolio`,
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Mario Cava Avila",
    "desarrollador full-stack",
    "ingeniero de software",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS B2B",
    "SEO programático",
    "integración de IA",
    "Barcelona",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: `${profile.name} · Portfolio`,
    title: `${profile.name} · ${profile.role}`,
    description: siteDescription,
    url: siteUrl,
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: siteDescription,
  },
};

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = path ? new URL(path, siteUrl).toString() : siteUrl;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}
