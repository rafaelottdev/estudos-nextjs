import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";

import "@/styles/globals.sass"

export const metadata: Metadata = {
  title: "Navbar Responsivo",
  description: "Praticando nextjs fazendo um navbar responsivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
