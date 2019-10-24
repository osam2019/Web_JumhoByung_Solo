import React from 'react';


import gql from 'graphql-tag';
import { Query, Mutation, graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import ErrorMessage from './Error';
import Loading from './Loading';

const GET_USERS = gql`
    query {
        users {
            id
        }
    }
`;

const GET_MESSAGES = gql`
	query {
		messages{
			id
			text
			user{
		  	    id
			    email
			    username
			}
		}
	}
`;

const SIGN_IN = gql`
    mutation($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
            token
        }
    }
`;

const Main = ({signIn, usersQuery, loading, error }) => {
    if (error) {
        return <ErrorMessage error={error} />;
    }
	
	// const updateAddStar = (client, mutationResult) => {
	// ...
	// };
		
	// const handleButtonClick = (e) => {
	// 	e.preventDefault();
	// 	const message = "new Message Arrived";
	// 	createMessage({variables: { message },
	// 				   // update={updateAddStar}
	// 				  })
	// }

    const { users } = usersQuery;
	// const { messages } = messagesQuery;
	const token = signIn({ variables: { login:"rwieruch", password: "rwieruch" } })
	console.log(token)
    // if (loading || !users || !messages) {
    //     return <Loading />;
    // }
	if (loading || !users) {
        return <Loading />;
    }
			// return (
			// <div>
			// <div>
			// {usersQuery.users.map(user => {
			// return <div key={user.id}>{user.id}</div>;
			// })}
			// Main
			// </div>
			// <div>
			// <input type="button" value="Add to favorites" onClick={handleButtonClick} />
			// </div>
			// <div>
			// 	{messagesQuery.messages.map(message => {
			// 		return <div key={message.id}>{message.id} {message.text} {message.user.id}</div>
			// 	})}
			// </div>
			// </div>
			// );
	return (
        <div>
            <div>
                {usersQuery.users.map(user => {
                    return <div key={user.id}>{user.id}</div>;
                })}
                Main
            </div>
        </div>
    );
};

export default compose(
	// graphql(GET_MESSAGES, { name: 'messagesQuery' }),
    graphql(GET_USERS, { name: 'usersQuery' }),
    graphql(SIGN_IN, { name: 'signIn' })
)(Main);