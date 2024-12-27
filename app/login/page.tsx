'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Login() {
  const { user, isLoading } = useUser()

  if (user && !isLoading) {
    redirect('/dashboard')
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <form action="/api/auth/login" method="GET">
          <Button type="submit" className="w-full">
            Sign in with Auth0
          </Button>
        </form>
      </div>
    </div>
  )
}

