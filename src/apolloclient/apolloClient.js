// import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
// import { useMemo } from "react";
// import { offsetLimitPagination } from "@apollo/client/utilities";

// let apolloClient

// function createApolloClient() {
// 	return new ApolloClient({
// 		connectToDevTools: true,
// 		ssrMode: typeof window === 'undefined',
// 		link: new HttpLink({
// 			uri: 'http://localhost:8000/graphql',
// 		}),
// 		cache: new InMemoryCache({
// 			// typePolicies: {
// 			// 	Query: {
// 			// 		fields: {
// 			// 			matches: offsetLimitPagination()
// 			// 		}
// 			// 	}
// 			// }
// 		})
// 	})
// }

// export function initializeApollo(initialState = null) {
// 	const _apolloClient = apolloClient ?? createApolloClient()
// 	if (initialState) {
// 		const existingCache = _apolloClient.extract()
// 		_apolloClient.cache.restore({...existingCache, ...initialState})
// 	}
// 	if (typeof window === 'undefined') {
// 		return _apolloClient
// 	}
// 	if (!apolloClient) {
// 		apolloClient = _apolloClient
// 	}
// 	return _apolloClient
// }

// export function useApollo(initialState) {
// 	return useMemo(() => initializeApollo(initialState), [initialState])
// }

import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { relayStylePagination, offsetLimitPagination } from "@apollo/client/utilities";
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient

function createApolloClient() {
  console.log('process',process.env.PRODUCTION_URL);
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/graphql' :
        'https://cms-api-api.herokuapp.com/graphql'
      // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({
      // typePolicies is not required to use Apollo with Next.js - only for doing pagination.
      typePolicies: {
        Query: {
          fields: {
            matches: offsetLimitPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState= null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}