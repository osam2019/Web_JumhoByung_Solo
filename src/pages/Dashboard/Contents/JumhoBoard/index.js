//IMPORT REACT
import React from 'react';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT PRESENTATION
import JumhoBoardPresentation from './jumhoboard';

//GQL
// const GET_MY_INFO = gql`
//     query{
//         me{
// 			id
// 			email
// 			militaryServiceNumber
// 			username
// 			serviceStart
// 			serviceEnd
//         }
//     }
// `;

function JumhoBoardContainer(props){
	// const client = useApolloClient();
	
	// const { loading, error, data } = useQuery(GET_MY_INFO);
	
	
	// if (loading || !data) return <p>Getting Data ...</p>;
	// if(error) return <p>Error!</p>
	// const { me } = data
	// if (!me) return <p>Getting Personal Data ...</p>;
	
	return(<JumhoBoardPresentation
			
    		{...props}
		/>)
}

export default JumhoBoardContainer;