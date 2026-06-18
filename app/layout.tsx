import type { Metadata } from "next";
import { poppins, aglatia } from "@/utils/fonts";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata: Metadata = {
  title: "SPEXMAKER | Bespoke Custom Eyewear",
  description: "Custom-engineered premium eyewear, tailored to your facial aesthetics. Launching soon.",
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
    </html>
  );
}
