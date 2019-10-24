//IMPORT REACT
import React from 'react';

//IMPORT Loading
import { BallClipRotateMultiple } from 'react-pure-loaders';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	flexContainer: {
		display: 'flex'
	},
    loading: {
		width: '100px',
		height: '10px',
	    position: 'absolute',
  		left: '50%',
		top: '50%',
    }
}));

export default function Loading(props) {
	const classes = useStyles();
    return (
		<div className={classes.loading}>
			<BallClipRotateMultiple color={'#000000'} loading={props.loading} />
		</div>
	)
}