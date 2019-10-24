//IMPORT REACT
import React from 'react';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT PRESENTATION
import ManageWorkInputPresentation from './manageworkinput';

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

function ManageWorkInputContainer(props){
	// const client = useApolloClient();
	
	// const { loading, error, data } = useQuery(GET_MY_INFO);
	
	
	// if (loading || !data) return <p>Getting Data ...</p>;
	// if(error) return <p>Error!</p>
	// const { me } = data
	// if (!me) return <p>Getting Personal Data ...</p>;
	
	return(<ManageWorkInputPresentation
			
    		{...props}
		/>)
}

export default ManageWorkInputContainer;