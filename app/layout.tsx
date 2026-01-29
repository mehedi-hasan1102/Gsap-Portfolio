import type { Metadata } from "next";
import { Staatliches } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Awwwards",
  description: "Award-winning portfolio with stunning animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${staatliches.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
