import { useSession } from 'next-auth/react'

export function useAuth (props) {
   const { status } = useSession()

   return status !== 'loading' && status !== "unauthenticated"
}