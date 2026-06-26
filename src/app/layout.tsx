import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { LogisticsBackdrop } from "@/components/backgrounds/LogisticsBackdrop";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "China Export — Import z Chin do Polski i Europy",
  description:
    "Znajdujemy, weryfikujemy i dostarczamy towary z Chin. Od audytów fabryk po odprawę celną i dostawę door-to-door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={cn("h-full", "antialiased", jakarta.variable, "font-sans", inter.variable)}>
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <LogisticsBackdrop variant="site" />
        <Header />
        <main className="relative z-10 flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
