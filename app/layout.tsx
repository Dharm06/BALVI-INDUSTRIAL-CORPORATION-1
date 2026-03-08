import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Balvi Industrial Corporation | Precision Engineering & Manufacturing",
  description:
    "Balvi Industrial Corporation - Where innovation meets excellence. Leading manufacturer of automobile components, machine tool components, pipe fittings & pump parts since 2012. GIDC Lodhika, Rajkot, Gujarat, India.",
  keywords: [
    "industrial manufacturing",
    "CNC machining",
    "automobile components",
    "machine tool components",
    "pipe fittings",
    "pump parts",
    "Rajkot",
    "Gujarat",
    "India",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1a3a5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
          <img
            src="/balvi-logo.png"
            alt=""
            className="w-[600px] h-auto opacity-[0.04]"
          />
        </div>
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
