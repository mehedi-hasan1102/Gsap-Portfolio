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
  title: "Mehedi Hasan | Developer, Storyteller & Technical Writer",
  description: "Discover Mehedi Hasan’s portfolio of Next.js and React projects, case studies, and technical writing. Learn through stories and code.",
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
