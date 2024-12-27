import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getSession()
  
  if (!session?.user) {
    redirect('/api/auth/login')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold">Welcome, {session.user.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is a protected dashboard page. Only authenticated users can see this content.
          </p>
        </div>
      </div>
    </div>
  )
}

