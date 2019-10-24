/* eslint-disable no-script-url */

import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from 'components/Dashboard/Title';
import DatePicker from 'components/Dashboard/Contents/ManageWorkInput/DatePicker'
import moment from 'moment'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function NumberOfPeople(props) {
  const classes = useStyles();
	
	var today = new moment();
    var tomorrow = moment(today).add(1, 'days');
	
	
    const [dates, setDates] = useState(new Date())
	
  const handleDateChange = (dates) => {
	  console.log(dates)
		// var month = date.getUTCMonth() + 1; //months from 1-12
		// var day = date.getUTCDate();
		// var year = date.getUTCFullYear();
	    setDates(dates)
		// const dateInString = year+'-'+month+'-'+day
		
		// props.setVacationFrom(dateInString)
		// setClickedFrom(true)
  }
	
  return (
    <React.Fragment>
      <Title>날짜선택</Title>
      <DatePicker handleDateChange={handleDateChange} dates={dates} tomorrow={tomorrow}/>
    </React.Fragment>
  );
}