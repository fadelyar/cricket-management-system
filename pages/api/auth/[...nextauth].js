import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import { LOGIN } from '../../../src/apolloclient/queries'
import { initializeApollo } from '../../../src/apolloclient/apolloClient'

const providers = [
   Credentials({
      name: 'Custom Credential',
      authorize: async (credentials) => {
         const apollo = initializeApollo()
         const { data, error } = await apollo.mutate({
            mutation: LOGIN,
            variables: {
               name: credentials.name,
               password: credentials.password
            }
         })
         if (error) {
            console.log('error', error);
         }
         const user = data.tokenAuth
         return user
      }
   }),
]

const callbacks = {
   // Getting the JWT token from API response
   async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
         token.accessToken = user.token
         token.user = user.user
      }
      return token
   },

   async session({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user = token.user
      return session
   }
}
const options = {
   providers,
   callbacks,
   session: {
      maxAge: 2 * 30 * 24 * 60 * 60,
      // which is used to look up the session in the database.
      strategy: "jwt",
   },
   jwt: {
      // A secret to use for key generation. Defaults to the top-level `secret`.
      secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
      // The maximum age of the NextAuth.js issued JWT in seconds.
      // Defaults to `session.maxAge`.
      maxAge: 2 * 60 * 60 * 24 * 30,
      // You can define your own encode/decode functions for signing and encryption
      // if you want to override the default behavior.
      // async encode({ secret, token, maxAge }) { },
      // async decode({ secret, token }) { },
   },
   secret: process.env.AUTH_SECRETE
}

export default (req, res) => NextAuth(req, res, options)