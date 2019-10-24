//IMPORT REACT
import React from 'react';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT ACTIONS
import { setToken, clearToken } from 'redux/actions';

//IMPORT PRESENTATION
import HomePresentation from './home';

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

function HomeContainer(props) {
	return(<HomePresentation
		logout={props.clearToken}
		authenticated={props.stateAuth.authenticated}
   		{...props}
	/>)
}
   
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;
