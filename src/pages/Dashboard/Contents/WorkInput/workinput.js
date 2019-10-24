//IMPORT REACT
import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import CompletedInput from 'components/Dashboard/Contents/WorkInput/CompletedInput'
import AskVacation from 'components/Dashboard/Contents/WorkInput/AskVacation'
import AskHaveWork from 'components/Dashboard/Contents/WorkInput/AskHaveWork'
import AskVacationFromTo from 'components/Dashboard/Contents/WorkInput/AskVacationFromTo'
import AskSubmit from 'components/Dashboard/Contents/WorkInput/AskSubmit'

const useStyles = makeStyles(theme => ({
  fab: {
	  position:'absolute',
	  right:'1vh',
  },
}));

const WorkInputPresentation = props => {
	const classes = useStyles();
	const [isVacation, setIsVacation] = useState('')
	const [vacationFrom, setVacationFrom] = useState(new Date())
	const [vacationTo, setVacationTo] = useState(new Date())
	const [haveWork, setHaveWork] = useState('')
	const [workType, setWorkType] = useState('')
	const [step, setStep] = useState("ASK_VACATION")
	
	
	
	// if(props.completed){
	// 	return(<CompletedInput setStep={setStep} setWantUpdate={props.setWantUpdate}/>)
	// }
	
	return(
		<div>
		{
			(function(){
				switch(step){
					case "ASK_VACATION":
						return (<AskVacation 
									isVacation={isVacation} 
									setIsVacation={setIsVacation}
									setStep={setStep}
								/>)
					case "ASK_VACATION_FROM_TO":
						return (<AskVacationFromTo 
									vacationFrom={vacationFrom} 
									vacationTo={vacationTo} 
									setVacationFrom={setVacationFrom}
									setVacationTo={setVacationTo}
									setStep={setStep}
								/>)
					case "ASK_WORKTYPE":
						return (<AskHaveWork 
								   availableTypes={props.availableTypes}
								   workType={workType}
								   setWorkType={setWorkType}
								   setStep={setStep}
								   userUpdateWork={props.userUpdateWork}
								   userCreateWork={props.userCreateWork}
								/>)
					case "ASK_SUBMIT":
						return (<AskSubmit
								   setStep={setStep}
								   userCreateWork={props.userCreateWork}
								/>)
					case "COMPLETED_INPUT":
						return <CompletedInput setStep={setStep}/>
					default:
						return <CompletedInput setStep={setStep}/>
				}
			})()
		}
		</div>
	)
};

export default WorkInputPresentation;