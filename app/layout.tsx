import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/500.css";
import "./globals.css";

const description =
  "Farshad Naderi is the Founder and Managing Director of Radman Consulting Group, with capabilities spanning AI strategy, business transformation, organizational systems, and executive leadership.";

export const metadata: Metadata = {
  metadataBase: new URL("https://farshadnaderi.vercel.app"),
  title: "Farshad Naderi | Founder & Managing Director",
  description,
  openGraph: {
    type: "profile",
    title: "Farshad Naderi | Founder & Managing Director",
    description,
    images: ["/images/farshad-naderi-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farshad Naderi | Founder & Managing Director",
    description,
    images: ["/images/farshad-naderi-hero.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
