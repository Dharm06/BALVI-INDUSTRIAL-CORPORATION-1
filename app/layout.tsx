import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-roboto-slab" });

export const metadata: Metadata = {
  title: 'Balvi Industrial Corporation | Precision Engineering & Manufacturing',
  description: 'Balvi Industrial Corporation - Where innovation meets excellence. Leading manufacturer of automobile components, machine tool components, pipe fittings & pump parts since 2012. GIDC Lodhika, Rajkot, Gujarat, India.',
  keywords: ['industrial manufacturing', 'CNC machining', 'automobile components', 'machine tool components', 'pipe fittings', 'pump parts', 'Rajkot', 'Gujarat', 'India'],
}

export const viewport: Viewport = {
  themeColor: '#1a3a5c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
