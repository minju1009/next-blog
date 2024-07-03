import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import './globals.css'


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
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
       <Header />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
