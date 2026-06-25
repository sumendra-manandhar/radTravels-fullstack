import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RadTravels — Nepal Trekking & MTB",
  description:
    "Expert-guided trekking and mountain biking in Nepal. Everest Base Camp, Annapurna Circuit, Upper Mustang MTB and more. Kathmandu-based since 2006.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
