import "@/app/globals.css"
import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import Type from "@/components/Type";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: 'Promptverse - AI Prompt Marketplace',
  description: 'promptverse is a marketplace for AI prompts. Buy and sell AI prompts for various AI models.',
   icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${poppins.variable} ${manrope.variable} bg-black text-white`}>
        <Type />
        {children}
        <Footer />
      </body>
    </html>
  );
}
