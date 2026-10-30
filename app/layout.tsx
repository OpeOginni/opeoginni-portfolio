import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Caveat, Schibsted_Grotesk } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-schibsted" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: profile.name,
  description: profile.lede,
  icons: { icon: "/favicon/logo.svg", apple: "/favicon/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#0f1520",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibsted.variable} ${caveat.variable}`}>
      <body className="bg-ground px-6 font-sans text-[15px] leading-[1.55] text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
