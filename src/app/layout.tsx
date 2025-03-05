import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/nav";

const MsSansSerif = localFont({
  src: '../../public/fonts/MS-Sans-Serif-8pt.ttf',
  variable: '--font-ms-sans-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Trying to find a job",
  description: "Just some guy trying to find a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MsSansSerif.variable} antialiased tracking-wider`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
