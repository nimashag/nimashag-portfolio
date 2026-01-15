import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nimasha Gamage Portfolio',
  description: 'Portfolio of Nimasha Gamage - Software Engineering Undergraduate specializing in full-stack development',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
