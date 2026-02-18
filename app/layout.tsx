import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ed's Portfolio",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0d0d1f]">
        {children}
      </body>
    </html>
  );
}
