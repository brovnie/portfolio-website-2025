import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "brovnie portfolio Front end developer",
  description: "Portfolio of a front end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
