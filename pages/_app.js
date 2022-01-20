import '../styles/globals.css'
import {ApolloProvider} from "@apollo/client";
import {useApollo} from '../src/apolloclient/apolloClient'

function MyApp({Component, pageProps}) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
