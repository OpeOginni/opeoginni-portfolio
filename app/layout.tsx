import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Caveat, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-schibsted" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500"], variable: "--font-caveat" });

const title = "Ope Oginni";
const description = "My personal portfolio site.";

export const metadata: Metadata = {
  metadataBase: new URL("https://opeoginni.dev"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: title, type: "website" },
  twitter: { card: "summary", title, description, creator: "@OpeOginni" },
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
