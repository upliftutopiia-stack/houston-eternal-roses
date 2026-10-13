
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Houston Eternal Roses | Independent Website Concept",
  description:
    "An independent website concept showcasing rose arrangement inspiration for Houston Eternal Roses.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
