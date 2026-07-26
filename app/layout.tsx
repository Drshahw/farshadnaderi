import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farshad Naderi | Business Advisor & Operator",
  description: "Farshad Naderi helps entrepreneurs and investors acquire, build, transform, and operate businesses in the UAE."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
