import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space Solutions',
  description: 'Space Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        {children}
      </body>
    </html>
  )
}
