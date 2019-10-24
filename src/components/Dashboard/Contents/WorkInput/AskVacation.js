//IMPORT REACT
import React from 'react';
import RadioButtonsGroup from 'components/Dashboard/Contents/WorkInput/RoleSelections';
import sunbed from './images/sunbed.png';
import gameOver from './images/game-over.png';
import activation from './images/activation.png'
import energy from './images/renewable-energy.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px',
  		backgroundColor: '#fcfcfc'  
    },
	center:{
		margin: '0 auto',
  		maxWidth: '700px',
  		// backgroundColor: '#000',
		borderRadius: '3px'
	},
	inner:{
		// backgroundColor: 'red',
		textAlign:'center',
	},
	innerHalf:{
		display: 'inline-block',
		width:"50%",
		height:'px',
		// backgroundColor: 'green',
		textAlign:'center'
	},
	button:{
		backgroundColor: '#ffffff',
		boxShadow: '0 1px 1px 0px rgba(32,33,36,0.28)'
	}
}))
							 
export default function AskVacation(props){
	const classes = useStyles()
	
	const handleClick = (e) => {
		if(e.target.id==="work"){
			props.setIsVacation(false)
			props.setStep('ASK_WORKTYPE')
		}
		else if(e.target.id==="vacation"){
			props.setIsVacation(true)
			props.setStep('ASK_VACATION_FROM_TO')
		}
	}
	
	return( 
		<div className={classes.root}>
			<div className={classes.center}>
				<div className={classes.inner}>
					<h1>내일 휴가 가시나요?</h1>
					<div className={classes.innerHalf}>
						<button id="work" className={classes.button} onClick={handleClick}>
							<img id="work" src={energy} width="256" height="256" />
							<h2 id="work">근무</h2>
						</button>
					</div>
					<div className={classes.innerHalf}>
						<button id="vacation" className={classes.button} onClick={handleClick}>
							<img id="vacation" src={sunbed} width="256" height="256" />
							<h2 id="vacation">휴가</h2>
						</button>
					</div>
					<div className={classes.innerHalf}></div>
				</div>
			</div>
		</div>
	)
}