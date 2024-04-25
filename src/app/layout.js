import SessionWrapper from '@/components/SessionWrapper'
import './globals.css'
import { Inter } from 'next/font/google'
// import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'snapterest',
  description: 'A perfect ',
}

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en" className='scroll-smooth'>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </SessionWrapper>
  )
}
