import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import './globals.css'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Starter Template',
  description: 'A Next.js starter template with Auth0 authentication and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </UserProvider>
      </body>
    </html>
  )
}

