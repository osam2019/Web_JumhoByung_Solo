//IMPORT REACT
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from 'components/Dashboard/Chart';
import Deposits from 'components/Dashboard/Deposits';
import Orders from 'components/Dashboard/Orders';

const WorkTypeApprovalPresentation = props => {
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={props.fixedHeightPaper}>
                    <Chart />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={props.fixedHeightPaper}>
                    <Deposits />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={props.classes.paper}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default WorkTypeApprovalPresentation;