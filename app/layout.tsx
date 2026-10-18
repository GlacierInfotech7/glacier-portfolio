import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glacier InfoTech — Web & digital products",
  description:
    "Glacier InfoTech creates clear websites, web applications, and practical digital products for growing businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
