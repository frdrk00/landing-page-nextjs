import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Space Solutions',
  description: 'Space Solutions',
}

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={cn(font.className, 'relative')}>{children}</body>
    </html>
  )
}
