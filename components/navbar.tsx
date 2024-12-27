'use client'

import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Mountain, LayoutDashboard, Info } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Navbar() {
  const { user, isLoading } = useUser()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Mountain className="h-6 w-6" />
          <span>Starter</span>
        </Link>
        
        <div className="flex items-center gap-6 ml-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          {user && (
            <Link 
              href="/dashboard" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
          )}
          <Link 
            href="/about" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {!isLoading && !user && (
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          )}
          {user && (
            <Button asChild variant="outline">
              <Link href="/api/auth/logout">Logout</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

