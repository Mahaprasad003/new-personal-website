import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ConsoleEasterEgg } from "@/components/ui/ConsoleEasterEgg";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollGradient } from "@/components/ui/ScrollGradient";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahaprasad.",
  description: "Data Scientist & AI Engineer",

  // Open Graph - for Facebook, LinkedIn, Discord, etc.
  openGraph: {
    title: "Mahaprasad.",
    description: "Data Scientist & AI Engineer",
    url: "https://mahaprasad.xyz", // Update with your actual domain
    siteName: "Mahaprasad",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "Mahaprasad - Data Scientist & AI Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mahaprasad.",
    description: "Data Scientist & AI Engineer",
    images: ["/og-image.png"],
  },

  // Additional metadata
  metadataBase: new URL("https://mahaprasad.xyz"), // Update with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YS79PV0FX2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YS79PV0FX2');
        `}
      </Script>
      <body
        className={`${geistMono.variable} font-mono antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <ScrollGradient />
          <ConsoleEasterEgg />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
