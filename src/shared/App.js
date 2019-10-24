import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Home, LogIn, SignUp, NotFound, Dashboard, ServerError } from 'pages';
import { useSelector } from 'react-redux'

import {AuthRoute} from 'HOC'

function App() {
	const authenticated = useSelector(state => state.auth.authenticated)
	
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Home {...props}/>
                    )}
                />
				<Route
                    exact
                    path="/main"
                    render={props => (
                        <Main {...props}/>
                    )}
                />
				<Route
                    exact
                    path="/login"
                    render={props => (
                        <LogIn {...props}/>
                    )}
                />
				<Route
                    exact
                    path="/signup"
                    render={props => (
                        <SignUp {...props}/>
                    )}
                />
				<Route
                    exact
                    path="/dashboard"
                    render={props => (
                        <Dashboard {...props}/>
                    )}
                />
				<Route component={ServerError}/>
            </Switch>
        </div>
    );
} 
 
export default App;


/*
				<AuthRoute
					authenticated={authenticated}
					path="/dashboard"
					render={props => (
					  	<Dashboard {...props}/>
					)}
				/>
*/