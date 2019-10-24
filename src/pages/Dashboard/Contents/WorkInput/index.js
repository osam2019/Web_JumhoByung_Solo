//IMPORT REACT
import React from 'react';

//IMPORT FROM GRAPHQL & APOLLO
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//IMPORT FROM REDUX
import { connect } from 'react-redux';

//IMPORT PRESENTATION
import WorkInputPresentation from './workinput';

//GQL - query
const GET_MY_WORK = gql`
    query{
        me{
			id
			unit{
				id
			}
			works{
				id
				date
				workType{
					id
					typename
				}
			}
        }
    }
`;

const GET_WORK_TYPES_BY_UNIT = gql`
    query($unitId: ID!) {
        workTypesByUnit(unitId: $unitId) {
            id
			typename
        }
    }
`;

//GQL - mutation
const USER_CREATE_WORK = gql`
    mutation($date: String!, $workTypeName: String!) {
        userCreateWork(date: $date, workTypeName: $workTypeName) {
			id
			workType{
				id
				typename
			}
        }
    }
`;

function getTomorrow(){
	const today = new Date();
	const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
	return tomorrow
}

function WorkInputContainer(props){
	const client = useApolloClient();
	
	//querys
    const _getMyWork = useQuery(GET_MY_WORK);
	if(_getMyWork.error){throw _getMyWork.error}
	const _getWorkTypesByUnit = useQuery(GET_WORK_TYPES_BY_UNIT, {variables:{unitId: 1}});
	if(_getWorkTypesByUnit.error){throw _getWorkTypesByUnit.error}
	
	//mutations	
	const [userCreateWork, _userCreateWork ] = useMutation(USER_CREATE_WORK, {
        onCompleted(x) {
			console.log(x)
        }
    });
	
	if (_getMyWork.loading || _getWorkTypesByUnit.loading) return <p>Getting Data ...</p>;

	const completed = _getMyWork.data.me.works.some(work => work.date === getTomorrow())
	const availableTypes = _getWorkTypesByUnit.data.workTypesByUnit.map(worktype => worktype.typename)
	console.log(availableTypes)
	
	return(<WorkInputPresentation
			availableTypes={availableTypes}
			completed={completed}
			userCreateWork={userCreateWork}
    		{...props}
	/>)
}

export default WorkInputContainer;