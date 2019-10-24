//https://github.com/onefinestay/react-daterange-picker#readme
import React, { Component, useState } from 'react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css'; // For some basic styling. (OPTIONAL)
import moment from "moment";

export default function DatePicker(props) {
	
// 	const stateDefinitions = {
//   available: {
//     color: null,
//     label: 'Available',
//   },
//   enquire: {
//     color: '#ffd200',
//     label: 'Enquire',
//   },
//   unavailable: {
//     selectable: false,
//     color: '#78818b',
//     label: 'Unavailable',
//   },
// };
// 	const dateRanges = [
//   {
//     state: 'enquire',
//     range: moment.range(
//       moment(),
//       moment()
//     ),
//   },
//   {
//     state: 'unavailable',
//     range: moment.range(
//       moment().add(3, 'weeks'),
//       moment().add(3, 'weeks').add(5, 'days')
//     ),
//   },
// ];
    return (
        <div>
            <DateRangePicker 
				onSelect={props.handleDateChange}
				value={props.dates} 
				singleDateRange={true} 
			/>
        </div>
    );
}

// /Import REACT
// import React from 'react';

// //IMPORT MATERIAL UI
// import Grid from '@material-ui/core/Grid';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// //IMPORT DATE Fns
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';

// /* --- */
// export default function DatePicker(props) {
//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
// 		  margin="normal"
//           id="date-picker-dialog"
//           label="날짜"
//           format="yyyy-MM-dd"
//           value={props.date}
// 		  maxDate={props.tomorrow}
// 		  autoOk={true}
//           onChange={props.handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }