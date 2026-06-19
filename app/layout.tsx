import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Viruthi — Centre for Flourishing Families",
  description:
    "Viruthi is a centre dedicated to nurturing relationships — patiently, attentively, with care. Estd. with intent.",
  keywords: ["Viruthi", "family", "relationships", "flourishing", "centre"],
  openGraph: {
    title: "Viruthi — Centre for Flourishing Families",
    description: "Where relationships are tended like gardens.",
    type: "website",
  },
};

import GlassNav from "@/components/GlassNav";
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/context/TransitionContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <CustomCursor />
        <TransitionProvider>
          <LenisProvider>
            <GlassNav />
            {children}
            <Footer />
          </LenisProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
