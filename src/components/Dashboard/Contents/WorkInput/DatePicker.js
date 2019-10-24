//https://github.com/onefinestay/react-daterange-picker#readme
import React, { Component, useState } from 'react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css'; // For some basic styling. (OPTIONAL)

export default function DatePicker(props) {
    return (
        <div>
            <DateRangePicker onSelect={props.handleDateChange} value={props.dates} singleDateRange={true} />
        </div>
    );
}

// //Import REACT
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
//           margin="normal"
//           id="date-picker-dialog"
//           label={props.from?"휴가시작 날짜":"휴가 끝 날짜"}
//           format="yyyy-MM-dd"
//           value={props.date}
// 					disablePast={true}
// 					autoOk={true}
//           onChange={props.handleDateClick}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }