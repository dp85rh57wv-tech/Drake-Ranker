import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Drake Ranker',
  description: 'Rank Drake songs, share your rankings, and compete with friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
