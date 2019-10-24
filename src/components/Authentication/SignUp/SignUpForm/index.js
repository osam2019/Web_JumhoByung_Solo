//IMPORT REACT
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

//IMPORT MATERIAL UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

//PRESENTATION
export default function SignUpPresentation(props) {
    const classes = useStyles();

    return (
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="이름"
                        value={props.username}
                        onChange={props.handleChange}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="militaryServiceNumber"
                        label="군번"
                        name="lastName"
                        value={props.militaryServiceNumber}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="serviceStart"
                        label="입대일"
                        name="serviceStart"
                        value={props.serviceStart}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="serviceEnd"
                        label="전역일"
                        name="serviceEnd"
                        value={props.serviceEnd}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소"
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        value={props.password}
                        onChange={props.handleChange}
                        autoComplete="current-password"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onSubmit={props.handleSubmit}
            >
                계정 만들기
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <RouterLink style={{ textDecoration: 'none', color: '#000000' }} to="/login">
                        이미 계정이 있나요?
                    </RouterLink>
                </Grid>
            </Grid>
        </form>
    );
}