import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/ui/smoothScroll";

const mazzard = localFont({
  src: "./fonts/MazzardH-Bold.otf",
  variable: "--font-mazzard",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Raj Patil - Full Stack Developer",
  description:
    "Personal portfolio of Raj Patil, a full stack developer crafting modern web experiences.",
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${mazzard.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}

//https://dribbble.com/shots/10724776-Carlos-Personal-Portfolio-Website
