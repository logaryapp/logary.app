import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: { default: 'Logary — Track Every Game You Play', template: '%s | Logary' },
  description: 'Log your library, discover your Gaming DNA, and get personalized game recommendations. The game tracker built for people who take gaming seriously.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
