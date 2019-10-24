import React from 'react';
import clsx from 'clsx';

//IMPORT DESIGN
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';

//IMPORT COMPONENT
import { MainListItems, SecondaryListItems } from 'components/Dashboard/listItems';
import Chart from 'components/Dashboard/Chart';
import Deposits from 'components/Dashboard/Deposits';
import Orders from 'components/Dashboard/Orders';
import Copyright from 'components/Footers/Copyright';

//IMPORT CONTENTS
import {Default,MyInfo, WorkInput, ManageWorkInput, AnalysisByDept, JumhoBoard, WorkTypeApproval,Chat } from './Contents'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 470
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const toggleDrawerOpen = () => {
        setOpen(!open);
    };
    const [currentMenu, setCurrentMenu] = React.useState('');
    const handleClick = e => {
        e.preventDefault();
        setCurrentMenu(e.target.textContent);
    };
	
	const handleClickLogout = () => {
		props.logout()
		props.history.push('/');
	}
	
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        {currentMenu ? currentMenu : `${props.data.me.username}님, 안녕하세요!`}
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
					<IconButton color="inherit" onClick={handleClickLogout}>
						<CancelIcon />
					</IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={toggleDrawerOpen}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <MainListItems handleClick={handleClick} />
                </List>
                <Divider />
                <List>
                    <SecondaryListItems handleClick={handleClick} />
                </List>
				<Copyright />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {function(){switch(currentMenu){
						case '':
						    return <JumhoBoard 
									   fixedHeightPaper={fixedHeightPaper} 
									   classes={classes}
									/>;
						case '점호인원보기':
							return <JumhoBoard
									   fixedHeightPaper={fixedHeightPaper} 
									   classes={classes}
									/>
						case '내 정보 수정하기':
							return <MyInfo
									   fixedHeightPaper={fixedHeightPaper} 
									   classes={classes}
									/>;
						case '근무입력하기':
							return <WorkInput
										fixedHeightPaper={fixedHeightPaper} 
										classes={classes}
									/>;
						case '병사입력관리':
							return <ManageWorkInput
										fixedHeightPaper={fixedHeightPaper} 
										classes={classes}
									/>;
						case '부서별 근무분석':
							return <AnalysisByDept
										fixedHeightPaper={fixedHeightPaper} 
										classes={classes}
									/>;
						case '결재':
							return <WorkTypeApproval
									fixedHeightPaper={fixedHeightPaper} 
									classes={classes}   
								    />;
						case '채팅':
							return <Chat
									fixedHeightPaper={fixedHeightPaper} 
									classes={classes}   
								   />
						default:
						  return null;
					}}()}
                </Container>
            </main>
        </div>
    );
}