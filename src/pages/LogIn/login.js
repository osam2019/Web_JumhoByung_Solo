//IMPORT REACT
import React, {useState} from 'react';
import { Redirect, Route, Link as RouterLink } from 'react-router-dom';

//IMPORT MATERIAL UI STYLE
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//IMPORT COMPONENT
import Copyright from 'components/Footers/Copyright';

//CSS STYLE
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(20),
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
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

//CONTAINER
export default function LoginForm({ authenticated, login, location }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
			  
    const handleChange = (e) => {
        if (e.target.id === 'email') {
			setEmail(e.target.value)
        }
		else if (e.target.id === 'password') {
			setPassword(e.target.value)
        }
    };
	
    const handleSubmit = (e) => {
		e.preventDefault();  
        try {
            login({ variables: { login:email, password:password } });
        } catch (error) {
            alert('Failed to login:', error);
            setEmail('');
            setPassword('');
        }
    };

    const to = { pathname: '/dashboard' };
	
    if (authenticated){
		return <Redirect to={to} />;
	}

    return (
        <SignInPresentation
            email={email}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

//PRESENTATION
function SignInPresentation(props) {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    점호병
                </Typography>
                <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={props.email}
                        onChange={props.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.password}
                        onChange={props.handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onSubmit={props.handleSubmit}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" color='secondary'>
                                비밀번호를 모르겠나요?
                            </Link>
                        </Grid>
                        <Grid item>
							<RouterLink
								style={{ textDecoration: 'none', color: '#000000' }}
								to="/signup"
							>
								계정을 생성할까요?
							</RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}