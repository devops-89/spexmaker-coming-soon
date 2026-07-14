import type { Metadata } from "next";
import { poppins, aglatia } from "@/utils/fonts";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SPEXMAKER | Bespoke Custom Eyewear",
  description: "Custom-engineered premium eyewear, tailored to your facial aesthetics. Launching soon.",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${aglatia.className}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18125109960"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9YKYJB0P6R');
          gtag('config', 'AW-18125109960');
        `}
      </Script>
    </html>
  );
}

