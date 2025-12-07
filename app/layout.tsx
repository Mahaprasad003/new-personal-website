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
  description: "Data Scientist & Creative Developer",
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
