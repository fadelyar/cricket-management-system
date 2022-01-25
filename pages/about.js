import React, { useState } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
import { Button } from '@material-ui/core'
import { initializeApollo } from '../src/apolloclient/apolloClient'
import { LOGIN } from '../src/apolloclient/queries'
// import { useState } from 'react'
import { useEffect } from 'react'

export default function About(props) {

   // const [session] = useSession()
   const { data: session, status } = useSession()
   return (
      <div>
         <h1>
            {JSON.stringify(session?.user)}
         </h1>
         <Button
            onClick={() => {
               signIn('credentials',
                  {
                     name: "faisal",
                     password: "GHSHFADM54096",
                     // The page where you want to redirect to after a 
                     // successful login
                     // callbackUrl: `${window.location.origin}/account_page`
                     redirect: false
                  }
               )
                  .then(({ error, status, ok, url }) => {
                     console.log('then is executed!', error, status, ok, url);
                  })
            }}
         >
            Sign In
         </Button>
         <Button onClick={() => {
            signOut()
         }}>
            Sign out
         </Button>
      </div>
   )
}

// export async function getServerSideProps() {
//    const apollo = initializeApollo()
//    const { data, error } = await apollo.mutate({
//       mutation: LOGIN,
//       variables: {
//          email: "noorifaisal@gmail.com",
//          password: "12345"
//       }
//    })
//    // console.log(data);
//    return {
//       props: {
//          data: []
//       }
//    }
// }