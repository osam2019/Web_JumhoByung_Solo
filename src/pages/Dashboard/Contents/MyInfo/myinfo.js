//IMPORT REACT
import React from 'react';

import UserInfo from 'components/Dashboard/Contents/MyInfo/userInfo.js';
import UnitInfo from 'components/Dashboard/Contents/MyInfo/unitInfo.js';
import BarrackInfo from 'components/Dashboard/Contents/MyInfo/barrackInfo.js';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
	  position:'absolute',
	  right:'1vh',
  },
}));

const DefaultPresentation = props => {
	const classes = useStyles();
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            {console.log(props.myInfo)}
            <Grid item xs={12} md={4} lg={5}>
                <Paper className={props.fixedHeightPaper} style={{position:'relative'}}>
                    <UserInfo myInfo={props.myInfo}/>
						<Fab color="secondary" aria-label="edit" className={classes.fab}>
							<EditIcon size="small" />
						</Fab>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={8} lg={7}>
                <Paper className={props.fixedHeightPaper} style={{position:'relative'}}>
					<UnitInfo myInfo={props.myInfo}/>
					<Fab color="secondary" aria-label="edit" className={classes.fab}>
						<EditIcon size="small" style={{float:'right'}}/>
					</Fab>
				</Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={props.classes.paper} style={{position:'relative'}}>
					<BarrackInfo myInfo={props.myInfo}/>
					<Fab color="secondary" aria-label="edit" className={classes.fab}>
						<EditIcon size="small" style={{float:'right'}}/>
					</Fab>
				</Paper>
            </Grid>
        </Grid>
    );
};

export default DefaultPresentation;
