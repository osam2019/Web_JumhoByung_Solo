import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3)
    },
    group: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row'
    }
}));

export default function RadioButtonsGroup(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
        props.setRoles([event.target.value]);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                    className={classes.group}
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={props.dataRoles.soldier.value}
                        control={<Radio />}
                        label={props.dataRoles.soldier.label}
                    />
                    <FormControlLabel
                        value={props.dataRoles.officer.value}
                        control={<Radio />}
                        label={props.dataRoles.officer.label}
                    />
                    <FormControlLabel
                        value={props.dataRoles.commander.value}
                        control={<Radio />}
                        label={props.dataRoles.commander.label}
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}