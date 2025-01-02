import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "@/components/navigation";
import Alert from "@/components/alert";

export const metadata: Metadata = {
  title: "Proyecto Grand Order - Api Services",
  description: "Api service for apps!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <header className="border-b lg:py-3 py-6 px-16">
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
