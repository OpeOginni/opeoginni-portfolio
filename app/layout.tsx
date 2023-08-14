import Header from "@/components/Header/Header";
import ContactComponent from "@/components/ContactComponent/Contact";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpeOginni Dev",
  description: "Remote Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          {children}

          <ContactComponent />
        </Providers>
      </body>
    </html>
  );
}
