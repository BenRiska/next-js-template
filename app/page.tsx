import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getSession()
  
  if (session?.user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Next.js Starter Template</h1>
        <p className="text-xl text-muted-foreground">
          A production-ready template featuring Auth0 authentication, 
          Tailwind CSS, and more.
        </p>
      </div>
    </div>
  )
}

