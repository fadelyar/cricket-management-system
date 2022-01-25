import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from '../src/apolloclient/apolloClient'
import { SessionProvider } from 'next-auth/react'

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const apolloClient = useApollo(pageProps)

	return (
		<SessionProvider session={session}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</SessionProvider>
	)
}

export default MyApp
