import clsx from 'clsx'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins, Oswald } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/main.scss'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '800', '900'],
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FashionVerse',
  description: 'Your fashion universe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(poppins.className, oswald.className)}>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
