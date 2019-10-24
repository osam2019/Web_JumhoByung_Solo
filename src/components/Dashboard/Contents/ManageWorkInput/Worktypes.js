/* eslint-disable no-script-url */

import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from 'components/Dashboard/Title';

// Generate Order Data

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(id, date, claSS, name, unit, workType, morningAttend, eveningAttend) {
  return { id, date, claSS, name, unit, workType, morningAttend,eveningAttend };
}

const rows = [
  createData(0, '2019-10-22', '병장', '가나다', '항공작전전대 항공작전과', '휴가', 'X', 'X'),
  createData(1, '2019-10-22', '상병', '가나다', '항공작전전대 항공작전과', '주간근무', 'O', 'O'),
  createData(2, '2019-10-22', '상병', '가나다', '항공작전전대 항공작전과', '야간근무', 'O', 'O'),
  createData(3, '2019-10-22', '일병', '가나다', '항공작전전대 항공작전과', '주간근무', 'O', 'O'),
  createData(4, '2019-10-22', '이병', '가나다', '항공작전전대 항공작전과', '주간근무', 'O', 'O'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function Worktypes() {
  const classes = useStyles();

  return (
	  <div className={classes.root}>
      <Title>내 병사 근무 세부사항</Title>
      <Table className={classes.table} aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell >계급</StyledTableCell >
            <StyledTableCell >날짜</StyledTableCell >
			<StyledTableCell >이름</StyledTableCell >
            <StyledTableCell >소속</StyledTableCell >
            <StyledTableCell >근무타입</StyledTableCell >
            <StyledTableCell >오전점호참석여부</StyledTableCell >
            <StyledTableCell >저녁점호참석여부</StyledTableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id}>
			  <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.claSS}</StyledTableCell>
              <StyledTableCell >{row.name}</StyledTableCell>
              <StyledTableCell >{row.unit}</StyledTableCell>
              <StyledTableCell >{row.workType}</StyledTableCell>
              <StyledTableCell >{row.morningAttend}</StyledTableCell>
              <StyledTableCell >{row.eveningAttend}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
		  {/*<div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>*/}
	 </div>
  );
}