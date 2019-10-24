//https://www.robinwieruch.de/react-graphql-apollo-tutorial

/* React */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

/* Redux */
import { Provider } from 'react-redux';
import configureStore from 'redux/store';

/* Palette */
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/* Apollo Client */
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state'

const theme = createMuiTheme({
	typography: {
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
  palette: {
    primary: { main: '#ffd800' }, // Yellow
    secondary: { main: '#000000' }, // Black
  },
});

const GRAPHQL_URI = 'https://blog-devdoops.run.goorm.io/graphql';

const httpLink = new HttpLink({
    uri: GRAPHQL_URI
});



const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('AUTH_TOKEN');
  const xToken = token ? `${token}` : ""
  console.log("authmiddleware token:",token)
  operation.setContext(({ headers = {} }) => ({
    headers: {
	  ...headers,
      "x-token": xToken
    }
  }))

  return forward(operation);
})



// const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//         graphQLErrors.forEach(({ message, locations, path }) => {
// 			console.log(
//                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//             )
// 		});
//     }
//     if (networkError) {
//         console.log(`[Network error]: ${networkError}`);
//     }
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from whereever it exists - This is your choice.
//   const token = localStorage.getItem('AUTH_TOKEN');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token
//     }
//   }
// });


// const httpLink = new HttpLink({ uri: GRAPHQL_URI });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   console.log("localStorage token : ", localStorage.getItem('AUTH_TOKEN'))
//   operation.setContext({
//     headers: {
//       "x-token": localStorage.getItem('AUTH_TOKEN'),
//     }
//   });
//   return forward(operation);
// })

// use with apollo-client
// const link = concat(authMiddleware, httpLink);



// const link = ApolloLink.from([errorLink, httpLink]);
const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
		console.log(message)
      if (message.includes("Your session expired.")) {
        // every 401/unauthorized error will be caught here and update the global local state
		localStorage.removeItem('AUTH_TOKEN');
        cache.writeData({
          data: {
            authStatus: {
              __typename: 'authStatus',
              status: 'loggedOut',
            },
          },
        });

      }
    });
  }
});

const stateLink = withClientState({
  cache: cache,
  resolvers: {},
  // set default state, else you'll get errors when trying to access undefined state
  defaults: {
    authStatus: {
      __typename: 'authStatus',
      status: 'loggedOut'
    },
  }
});

const link = ApolloLink.from([authMiddleware, errorLink, stateLink, httpLink])

const client = new ApolloClient({
    link,
    cache
});

// cache.writeData({
//   data: {
//     isLoggedIn: !!localStorage.getItem('AUTH_TOKEN'),
// 	token: localStorage.getItem('AUTH_TOKEN'),
//   },
// });




const Root = () => (
    <ApolloProvider client={client}>
        <Provider store={configureStore()}>
            <BrowserRouter>
				<ThemeProvider theme={theme}>
                	<App />
				</ThemeProvider>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

export default Root;