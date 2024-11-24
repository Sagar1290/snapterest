"use client";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Inter } from "next/font/google";
import { SessionContext, PostContext } from "./context";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);
  const [postData, setPostData] = useState([]);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <PostContext.Provider
        value={{
          postData,
          setPostData,
        }}
      >
        <html lang="en" className="scroll-smooth">
          <body className={inter.className}>
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
        </html>
      </PostContext.Provider>
    </SessionContext.Provider>
  );
}
