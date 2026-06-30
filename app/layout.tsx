import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Viruthi",
  description:
    "Viruthi is a centre dedicated to nurturing relationships — patiently, attentively, with care. Estd. with intent.",
  keywords: ["Viruthi", "family", "relationships", "flourishing", "centre"],
  openGraph: {
    title: "Viruthi",
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
