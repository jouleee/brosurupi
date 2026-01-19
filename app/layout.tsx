import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universitas Pendidikan Indonesia - UPI",
  description: "Universitas Pendidikan Indonesia (UPI) - Pelopor dan Unggul dalam pendidikan multidisiplin",
  keywords: "UPI, Universitas Pendidikan Indonesia, pendidikan, Bandung",
  generator: "v0.app",
  icons: {
    icon: "/Logo_Almamater_UPI.svg (1).png",
    apple: "/Logo_Almamater_UPI.svg (1).png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
