//IMPORT REACT
import React from 'react';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT ACTIONS
import { setToken, clearToken } from 'redux/actions';

//IMPORT PRESENTATION
import DashboardPresentation from './dashboard';

//IMPORT LOADING
import Loading from 'components/Loading'

//GQL
const GET_MY_NAME = gql`
    query{
        me{
			username
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
        setToken: ({token}) => {
            dispatch(setToken({token}));
        },
		clearToken: () => {
            dispatch(clearToken());
        }
    };
};

function DashboardContainer(props){
	const client = useApolloClient();
	
    const { loading, error, data } = useQuery(GET_MY_NAME);
	console.log(111, loading)
	console.log(222, error)
	console.log(333, data)

	if (loading) return <Loading loading={loading}/>;
	console.log(444, loading)
	console.log(555, error)
	console.log(666, data)
	
	if (Object.keys(data).includes("me")) {
		console.log(data)
		return(<DashboardPresentation
			data={data}
			logout={props.clearToken}
			authenticated={props.stateAuth.authenticated}
    		{...props}
		/>)
	}	
}
   
const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

export default Dashboard;
