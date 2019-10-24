//IMPORT REACT
import React from 'react';
import RadioButtonsGroup from 'components/Dashboard/Contents/WorkInput/RoleSelections';
import light from './images/light.png'
import enterprise from './images/enterprise.png'
import employee from './images/employee.png'
import fryingPan from './images/frying-pan.png'
import gameOver from './images/game-over.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px',
  		backgroundColor: '#fcfcfc'  
    },
	center:{
		margin: '0 auto',
  		// maxWidth: '700px',
  		// backgroundColor: '#000',
		borderRadius: '3px'
	},
	inner:{
		// backgroundColor: 'red',
		textAlign:'center',
	},
	innerHalf:{
		display: 'inline-block',
		width:"20%",
		margin: "5px",
		// backgroundColor: 'green',
		textAlign:'center'
	},
	button:{
		backgroundColor: '#ffffff',
		boxShadow: '0 1px 1px 0px rgba(32,33,36,0.28)'
	}
}))

function getTomorrow(){
	const today = new Date();
	const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
	return tomorrow
}

export default function AskVacation(props){
	const classes = useStyles()
	
	const handleClick = (e) => {
		if(e.target.id==="noWork"){
			props.setWorkType("NO_WORK")
			props.setStep('COMPLETED_INPUT')
			props.userCreateWork({ variables: { date:getTomorrow(), workTypeName:"비번" } })
		}
		else if(e.target.id==="dayWork"){
			props.setWorkType("DAY_WORK")
			props.setStep('COMPLETED_INPUT')
			props.userCreateWork({ variables: { date:getTomorrow(), workTypeName:"주간근무" } })
		}
		else if(e.target.id==="nightWork"){
			props.setWorkType("NIGHT_WORK")
			props.setStep('COMPLETED_INPUT')
			props.userCreateWork({ variables: { date:getTomorrow(), workTypeName:"야간근무" } })
		}
		else if(e.target.id==="outWork"){
			props.setWorkType("OUT_WORK")
			props.setStep('COMPLETED_INPUT')
			props.userCreateWork({ variables: { date:getTomorrow(), workTypeName:"급양근무" } })
		}
	}
	
	return( 
		<div className={classes.root}>
			<div className={classes.center}>
				<div className={classes.inner}>
					<h1>어떤 근무를 하시나요?</h1>
					{
						props.availableTypes.includes("주간근무")
							?
							<div className={classes.innerHalf}>
								<button id="dayWork" className={classes.button} onClick={handleClick}>
									<img id="dayWork" src={employee} width="90" height="90" />
									<h2 id="dayWork">주간근무</h2>
								</button>
							</div>
							: ""	
					}
					{
						props.availableTypes.includes("비번")
							?
							<div className={classes.innerHalf}>
								<button id="noWork" className={classes.button} onClick={handleClick}>
									<img id="noWork" src={gameOver} width="90" height="90" />
									<h2 id="noWork">비번</h2>
								</button>
							</div>
							:""
					}
					{
						props.availableTypes.includes("야간근무")
							?
							<div className={classes.innerHalf}>
								<button id="nightWork" className={classes.button} onClick={handleClick}>
									<img id="nightWork" src={light} width="90" height="90" />
									<h2 id="nightWork">야간근무</h2>
								</button>
							</div>
							:""
					}
					{
						props.availableTypes.includes("급양근무")
							?
							<div className={classes.innerHalf}>
								<button id="outWork" className={classes.button} onClick={handleClick}>
									<img id="outWork" src={fryingPan} width="90" height="90" />
									<h2 id="outWork">급양근무</h2>
								</button>
							</div>
							:""
					}
				</div>
			</div>
		</div>
	)
}