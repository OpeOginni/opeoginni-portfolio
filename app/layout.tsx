import Header from "@/components/Header/Header";
import ContactComponent from "@/components/ContactComponent/Contact";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opeyemi Oginni",
  description: "Remote Software Developer",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      sizes: "32x32",
      url: "/favicon/logo.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      sizes: "16x16",
      url: "/favicon/logo.svg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-w-0 w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <ContactComponent />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
