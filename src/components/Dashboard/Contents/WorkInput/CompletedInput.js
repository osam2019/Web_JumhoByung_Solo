//IMPORT REACT
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px',
  		// backgroundColor: '#fcfcfc'  
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
		backgroundColor: '#f1ebcf',
		textAlign:'center'
	},
	innerFull:{
		display: 'inline-block',
		width:"100%",
		// backgroundColor: 'green',
		textAlign:'center'
	},
	button: {
    	margin: theme.spacing(1),
  	},
	  input: {
		display: 'none',
	  },
}))


export default function CompletedInput(props){
	const classes = useStyles();
	
	const handleClick = (e) => {
		e.preventDefault()
		props.setStep('ASK_VACATION')
	}
	
	return(
		<div className={classes.root}>
			<div className={classes.center}>
				<div className={classes.inner}>
					<h1>모든 입력을 완료하셨습니다!</h1>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
						수정하기
					</Button>
				</div>
			</div>
		</div>
	)
}