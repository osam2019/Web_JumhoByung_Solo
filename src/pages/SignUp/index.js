//IMPORT REACT
import React from 'react';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT ACTIONS
import { setToken } from 'redux/actions';

//IMPORT PRESENTATION
import SignUpPresentation from './signup';

//GQL
const SIGN_UP = gql`
    mutation(
		$username: String!, 
		$password: String!,
		$email: String!,
		$militaryServiceNumber: String!, 
		$serviceStart: String!,
		$serviceEnd: String!,
		$roles: [String!]) {
        signUp(
			username: $username, 
			password: $password,
			email: $email,
			militaryServiceNumber: $militaryServiceNumber,
			serviceStart: $serviceStart,
			serviceEnd: $serviceEnd,
			roles: $roles) {
            token
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
        setToken: (token) => {
            dispatch(setToken({token}));
        }
    };
};

function SignUpContainer(props){
	const client = useApolloClient();
	
    const [signup, { loading, error }] = useMutation(SIGN_UP, {
        onCompleted({signUp:{token}}) {
			props.setToken(token);
        }
    });
	if(error){
		console.log("signup Error")
	}
	
	return(<SignUpPresentation
			signup={signup}
			authenticated={props.stateAuth.authenticated}
    		{...props}
		/>)
}
   
const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
export default SignUp;
