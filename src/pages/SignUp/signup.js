//IMPORT REACT
import React, { useState } from 'react';

//IMPORT REACT-ROUTER
import { Redirect, Route, Link as RouterLink } from 'react-router-dom';

//IMPORT MAETRIAL-UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//IMPORT COMPONENT
import Copyright from 'components/Footers/Copyright';
import RadioButtonsGroup from 'components/Authentication/SignUp/RoleSelections';
import SignUpForm from 'components/Authentication/SignUp/SignUpForm';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

//CONTAINER
export default function SignUp({ authenticated, signup }) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [militaryServiceNumber, setMilitaryServiceNumber] = useState('');
    const [serviceStart, setServiceStart] = useState('');
    const [serviceEnd, setServiceEnd] = useState('');
    const [roles, setRoles] = useState([]);

    const handleChange = e => {
        if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else if (e.target.id === 'password') {
            setPassword(e.target.value);
        } else if (e.target.id === 'username') {
            setUsername(e.target.value);
        } else if (e.target.id === 'militaryServiceNumber') {
            setMilitaryServiceNumber(e.target.value);
        } else if (e.target.id === 'serviceStart') {
            setServiceStart(e.target.value);
        } else if (e.target.id === 'serviceEnd') {
            setServiceEnd(e.target.value);
        } else if (e.target.id === 'roles') {
            setRoles([e.target.value]);
        } else {
            throw new Error();
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            signup({
                variables: {
                    username: username,
                    email: email,
                    password: password,
                    militaryServiceNumber: militaryServiceNumber,
                    serviceStart: serviceStart,
                    serviceEnd: serviceEnd,
                    roles: roles
                }
            });
        } catch (error) {
            alert('Failed to login:', error);
            setEmail('');
            setPassword('');
            setUsername('');
            setMilitaryServiceNumber('');
            setServiceStart('');
            setServiceEnd('');
            setRoles('');
        }
    };

    const { to } = { to: { pathname: '/dashboard' } };

    if (authenticated) {
        return <Redirect to={to} />;
    }

    const dataRoles = {
        soldier: { value: 'SOLDIER', label: '병사' },
        officer: { value: 'OFFICER', label: '간부' },
        commander: { value: 'COMMANDER', label: '지휘관' }
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        점호병
                    </Typography>
                    <RadioButtonsGroup setRoles={setRoles} dataRoles={dataRoles} />
                    {(function() {
                        switch (roles[0]) {
                            case 'SOLDIER':
                                return (
                                    <SignUpForm
                                        email={email}
                                        password={password}
                                        username={username}
                                        militaryServiceNumber={militaryServiceNumber}
                                        serviceStart={serviceStart}
                                        serviceEnd={serviceEnd}
                                        roles={roles}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                                );
                            case 'OFFICER':
                                return (
                                    <SignUpForm
                                        email={email}
                                        password={password}
                                        username={username}
                                        militaryServiceNumber={militaryServiceNumber}
                                        serviceStart={serviceStart}
                                        serviceEnd={serviceEnd}
                                        roles={roles}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                                );
                            case 'COMMANDER':
                                return (
                                    <SignUpForm
                                        email={email}
                                        password={password}
                                        username={username}
                                        militaryServiceNumber={militaryServiceNumber}
                                        serviceStart={serviceStart}
                                        serviceEnd={serviceEnd}
                                        roles={roles}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                                );
                            default:
                                return null;
                        }
                    })()}
                </div>
            </Container>
        </div>
    );
}

/*
*/

