import { Inter } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Chatbot from "@/components/Helper/Chatbot";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${font.className} antialiased bg-[#0d0d1f]`}>
      <ResponsiveNav />
      {children}
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}
