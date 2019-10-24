//IMPORT REACT
import React, {useState} from 'react';
import DatePicker from './DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

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
		backgroundColor: '#f3edcb',
		textAlign:'center'
	},
	innerFull:{
		display: 'inline-block',
		width:"100%",
		// backgroundColor: 'green',
		textAlign:'center'
	},
}))

export default function AskVacationFromTo(props){
	const classes = useStyles()
	const [dates, setDates] = useState(null)
	
	var today = new moment();
    var tomorrow = moment(today).add(1, 'days');
		
	const handleDateChange = (dates) => {
		var s_day = dates.start._d.getUTCDate();
		var s_month = dates.start._d.getUTCMonth() + 1;
		var s_year = dates.start._d.getUTCFullYear();
		
		var e_day = dates.end._d.getUTCDate();
		var e_month = dates.end._d.getUTCMonth() + 1;
		var e_year = dates.end._d.getUTCFullYear();
		
		props.setVacationFrom(s_day+"-"+s_month+"-"+s_year)
		props.setVacationTo(e_day+"-"+e_month+"-"+e_year)
		setDates(dates)
	}
	
	if(dates){
		props.setStep('COMPLETED_INPUT')
	}
	
	return (
		<div className={classes.root}>
			<div className={classes.center}>
				<div className={classes.inner}>
					<h1>휴가 시작과 끝을 선택하세요.</h1>
					<div className={classes.innerHalf}>
						<DatePicker handleDateChange={handleDateChange} dates={dates} tomorrow={tomorrow}/>
					</div>
				</div>
			</div>
		</div>
	)
}