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
      <body
        className={cn(
          font.className,
          'overflow-auto h-full max-sm:p-4 my-6 bg-gradient-to-br from-[#191236] to-[#0d0d1f]'
        )}
      >
        <div className="mx-auto max-w-screen-xl h-full">{children}</div>
      </body>
    </html>
  )
}
