import type {Metadata} from "next";
import "./globals.css";

import {Inter, Prata} from "next/font/google";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prata",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-12 pt-6 pb-24 bg-dark_black">
        <Link href="/">
          <span className="text-2xl font-prata" aria-label="Logo">
            Clarinet
          </span>
        </Link>
        <Link href="/build">Build</Link>
      </header>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prata.variable} ${inter.variable} antialiased bg-light_black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
