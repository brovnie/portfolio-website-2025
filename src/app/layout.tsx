import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Developer | React | UX Portfolio – brovnie",
  description:
    "Frontend Developer & UX Enthusiast — Crafting smooth, accessible UIs with React and React Native. Focused on user-first design, clean code, and fast interfaces. Let's build something people love. 💻✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased dark:bg-dark h-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
