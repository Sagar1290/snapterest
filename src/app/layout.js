"use client"
import './globals.css'
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Inter } from 'next/font/google'
import SessionContext from './context';
import { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <html lang="en" className='scroll-smooth'>
        <body className={inter.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </SessionContext.Provider>
  )
}
