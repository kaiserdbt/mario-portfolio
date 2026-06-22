import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { defaultMetadata, profileJsonLd } from "@/lib/seo";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// titulares: una sola familia donde el upright es Satoshi y la cursiva es Gambetta,
// asi un <span italic> dentro de un heading salta a Gambetta solo
const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Gambetta-VariableItalic.woff2", weight: "300 700", style: "italic" },
  ],
});

// satoshi puro para titulos interiores (uppercase) y cuerpo de apoyo
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [{ path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" }],
});

// chillax para subtextos
const chillax = localFont({
  variable: "--font-chillax",
  display: "swap",
  src: [{ path: "./fonts/Chillax-Variable.woff2", weight: "200 700", style: "normal" }],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${satoshi.variable} ${chillax.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
