import { handleAuth } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: {
    returnTo: '/dashboard'
  },
  signup: {
    returnTo: '/dashboard'
  }
})

