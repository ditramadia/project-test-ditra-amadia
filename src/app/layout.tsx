import type { Metadata } from "next";

import '@fontsource/poppins';

import "./globals.css";
import "@public/styles/typescale.css";
import "@public/styles/transition.css";

export const metadata: Metadata = {
  title: "Project Test",
  description: "Project test for Suit Media",
  authors: {name: "Ditra Amadia"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">{children}</body>
    </html>
  );
}
