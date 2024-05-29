import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/pages/Layout";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "minju | blog",
  description: "minju's blog practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="sans.className">
      <body>
        <Layout />
        {children}</body>
    </html>
  );
}
