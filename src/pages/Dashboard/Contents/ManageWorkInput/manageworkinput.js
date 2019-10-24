//IMPORT REACT
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from 'components/Dashboard/Chart';
import NumberOfPeople from 'components/Dashboard/Contents/ManageWorkInput/NumberOfPeople';
import Worktypes from 'components/Dashboard/Contents/ManageWorkInput/Worktypes';
import PieChartWithCustomizedLabel from 'components/Dashboard/Contents/ManageWorkInput/PieChartWithCustomizedLabel'
import StackedBarChart from 'components/Dashboard/Contents/ManageWorkInput/StackedBarChart'
import MySoldiersTable from 'components/Dashboard/Contents/ManageWorkInput/mySoldiersTable'

const ManageWorkInputPresentation = props => {
    return (
        <Grid container spacing={3}>
			{/* Recent Deposits */}
            <Grid item xs={12} md={5} lg={4}>
                <Paper className={props.fixedHeightPaper}>
                    <NumberOfPeople />
                </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={7} lg={6}>
                <Paper className={props.fixedHeightPaper}>
                   <PieChartWithCustomizedLabel />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={props.classes.paper}>
					{/*<Worktypes />*/}
					<MySoldiersTable />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ManageWorkInputPresentation;