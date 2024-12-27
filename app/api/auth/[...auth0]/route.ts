import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard'
  }),
  onError(req, error) {
    console.error('Auth0 error:', error)
    return new Response(`Auth0 error: ${error.message}`, {
      status: error.status || 500,
    })
  }
})

