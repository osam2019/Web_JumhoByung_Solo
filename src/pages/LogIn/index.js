//IMPORT REACT
import React, { useState } from 'react';
import { Redirect, Route, Link as RouterLink } from 'react-router-dom';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import memCache from 'graphql-hooks-memcache';
import { InMemoryCache } from 'apollo-cache-inmemory';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT ACTIONS
import { setToken, clearToken } from 'redux/actions';

//IMPORT PRESENTATION
import LogInPresentation from './login';

//GQL
const SIGN_IN = gql`
    mutation($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
            token
        }
    }
`;

const GET_AUTH = gql`
query authStatus {
  authStatus @client {
    status
  }
}
`;

//MAP STATE
const mapStateToProps = state => {
    return {
        stateAuth: state.auth
    };
};

//MAP PROPS
const mapDispatchToProps = dispatch => {
    return {
        setToken: token => {
            dispatch(setToken({ token }));
        },
        clearToken: () => {
            dispatch(clearToken());
        }
    };
};

function LogInContainer(props) {
	const [authenticated, setAuthenticated] = useState(false)
	
    const client = useApolloClient();
	console.log(client)
	
	
	
	const [login, { loading, error }] = useMutation(SIGN_IN, {
        onCompleted({ signIn: { token } }) {
			localStorage.setItem("AUTH_TOKEN", token)
			setAuthenticated(true)
			client.cache.writeData({
                data: {
                    authStatus: {
                        __typename: 'authStatus',
                        status: 'loggedIn'
                    }
                }
            });
			
        }
    });
	
	// const _getAuth = useQuery(GET_AUTH)
	// if(_getAuth.loading) return <div>dd</div>
	
	// const authenticated = _getAuth.data
	console.log(authenticated)
    
	
    return (
        <LogInPresentation login={login} authenticated={authenticated} {...props} />
    );
}

const LogIn = connect(mapStateToProps, mapDispatchToProps)(LogInContainer);

export default LogIn;