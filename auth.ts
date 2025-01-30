import NextAuth from 'next-auth'
import { compare } from 'bcryptjs'
import  Credentials  from 'next-auth/providers/credentials'
import { users } from './lib/placeholder-data'
import { authConfig } from './auth.config'

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          const user = users.find((x) => x.email === credentials.email)
          if (!user) return null
          const passwordsMatch = await compare(
            credentials.password as string,
            user.password
          )
          if (passwordsMatch) return user
  
          console.log('Invalid credentials')
          return null
        },
      }),
    ],
  })