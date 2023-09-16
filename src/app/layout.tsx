
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import Header from './components/Header/Header'
import { StickyNavbar } from './components/Header/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marketing Hub',
  description: 'Create lading page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
        
    
      <body className={`${inter.className} overflow-x-hidden`}>
      <StickyNavbar/>
        {children}</body>
    </html>
  )
}
