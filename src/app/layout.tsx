import { Menu } from '@/components/menu'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '200'
})

export const metadata: Metadata = {
  title: 'Ceres',
  description: 'PWA application using Next.js to manage a water pump',
  manifest: '/manifest.json',
  icons: {apple: '/icon-512x512.png'},
  themeColor: '#417505',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
