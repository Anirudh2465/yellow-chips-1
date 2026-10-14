import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Yellow Chips — Pure Kerala Snacks",
    template: "%s | The Yellow Chips",
  },
  description:
    "Authentic Kerala banana chips, jackfruit chips, and traditional snacks handcrafted in coconut oil. Zero preservatives. Straight from Kalpathy, Palakkad.",
  keywords: [
    "Kerala banana chips",
    "Nendran banana chips",
    "coconut oil chips",
    "traditional Kerala snacks",
    "Yellow Chips",
    "Kalpathy snacks",
    "no preservatives chips",
  ],
  openGraph: {
    title: "The Yellow Chips — Pure Kerala Snacks",
    description:
      "Handcrafted in coconut oil. Straight from Kalpathy. Zero preservatives.",
    url: "https://yellowchips.in",
    siteName: "The Yellow Chips",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Yellow Chips — Pure Kerala Snacks",
    description: "Handcrafted Kerala snacks. Zero preservatives. 100% coconut oil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased kerala-texture">
        {children}
      </body>
    </html>
  );
}
