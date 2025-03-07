import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PreferCoding - Transform Your Future with Tech Excellence",
  description: "Master web development, digital marketing, and HR skills with industry experts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigation /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'