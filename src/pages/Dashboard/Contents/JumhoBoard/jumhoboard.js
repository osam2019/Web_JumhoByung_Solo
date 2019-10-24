//IMPORT REACT
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from 'components/Dashboard/Chart';
import Deposits from 'components/Dashboard/Deposits';
import Orders from 'components/Dashboard/Orders';
import Worktypes from 'components/Dashboard/Contents/ManageWorkInput/Worktypes';
import StackedBarChart from 'components/Dashboard/Contents/JumhoBoard/StackedBarChart'
import StackedBarChartEvening from 'components/Dashboard/Contents/JumhoBoard/StackedBarChartEvening'

import JumhoSoldiersTable from 'components/Dashboard/Contents/JumhoBoard/jumhoSoldiersTable'
import { makeData } from "components/Dashboard/Contents/JumhoBoard/Utils";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



const peopleInRooms = Array.from(Array(11).keys()).map(() => makeData())
const excelData = peopleInRooms.map(room => room.map(soldier => Object.keys(soldier).map(key => {return {value: soldier[key]}})))

const multiDataSet = [
    {
        columns: ["계급", "이름", "근무 타입", "근무 시간", "오전 점호", "저녁 점호", "입력 상태",],
        data: [
            [
                {value: "상병", style: {font: {bold: true}}},
                {value: "이우석", style: {font: {bold: true}}},
                {value: "주간근무", style: {font: {bold: true}}},
                {value: "0830-1730", style: {font: {bold: true}}},
                {value: "O", style: {font: {bold: true}}},
                {value: "X", style: {font: {bold: true}}},
                {value: "입력완료", style: {font: {bold: true}}},	
            ],
            [
                {value: "상병", style: {font: {bold: true}}},
                {value: "최현석", style: {font: {bold: true}}},
                {value: "주간근무", style: {font: {bold: true}}},
                {value: "0830-1730", style: {font: {bold: true}}},
                {value: "O", style: {font: {bold: true}}},
                {value: "X", style: {font: {bold: true}}},
                {value: "입력완료", style: {font: {bold: true}}},	
            ],
			[
                {value: "상병", style: {font: {bold: true}}},
                {value: "박철민", style: {font: {bold: true}}},
                {value: "주간근무", style: {font: {bold: true}}},
                {value: "0830-1730", style: {font: {bold: true}}},
                {value: "O", style: {font: {bold: true}}},
                {value: "X", style: {font: {bold: true}}},
                {value: "입력완료", style: {font: {bold: true}}},	
            ],
			[
                {value: "상병", style: {font: {bold: true}}},
                {value: "최현우", style: {font: {bold: true}}},
                {value: "주간근무", style: {font: {bold: true}}},
                {value: "0830-1730", style: {font: {bold: true}}},
                {value: "O", style: {font: {bold: true}}},
                {value: "X", style: {font: {bold: true}}},
                {value: "입력완료", style: {font: {bold: true}}},	
            ],
			[
                {value: "상병", style: {font: {bold: true}}},
                {value: "박상현", style: {font: {bold: true}}},
                {value: "주간근무", style: {font: {bold: true}}},
                {value: "0830-1730", style: {font: {bold: true}}},
                {value: "O", style: {font: {bold: true}}},
                {value: "X", style: {font: {bold: true}}},
                {value: "입력완료", style: {font: {bold: true}}},	
            ],
        ]
    }
];

const JumhoBoardPresentation = props => {
	const [roomNumber, setRoomNumber] = useState(0)
	
	const handleBarClick = (x) => {
		setRoomNumber(x-1)
	}
	
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
                <Paper className={props.fixedHeightPaper}>
                    <StackedBarChart data={peopleInRooms} handleBarClick={handleBarClick} />
                </Paper>
            </Grid>
			<grid item xs={12}>
				<ExcelFile element={<button>오전 점호 인원 보고서</button>}>
                    <ExcelSheet dataSet={multiDataSet} name="Organization"/>
                </ExcelFile>
			</grid>
			{/* Recent Deposits */}
            <Grid item xs={12}>
                <Paper className={props.fixedHeightPaper}>
                    <JumhoSoldiersTable data={peopleInRooms[roomNumber]}/>
                </Paper>
            </Grid>
			{/* Chart */}
            <Grid item xs={12}>
                <Paper className={props.fixedHeightPaper}>
                    <StackedBarChartEvening data={peopleInRooms} handleBarClick={handleBarClick} />
                </Paper>
            </Grid>
			<grid item xs={12}>
				<ExcelFile element={<button>저녁 점호 인원 보고서</button>}>
                    <ExcelSheet dataSet={multiDataSet} name="Organization"/>
                </ExcelFile>
			</grid>
        </Grid>
    );
};

export default JumhoBoardPresentation;