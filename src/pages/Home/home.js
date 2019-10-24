//IMPORT REACT
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOut from 'components/Authentication/LogOut';
import Slider from 'components/Slider';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	header:{
		height:'75px',
		position: 'absolute',
		top:0,
		width:'100%',
	},
    buttonLeft: {
        margin: '2vw',
        // position: 'absolute',
        // left: 0,
        // top: 0
    },
    buttonRight: {
        margin: '2vw',
		float: 'right'
        // position: 'absolute',
        // right: 0,
        // top: 0
    },
	buttonRight2: {
        marginTop: '2vw',
		marginRight: '1vw',
		float: 'right'
		// display: 'block',
		// position: 'absolute',
    },
	container: {
		width: '146px',
	    height: '44px'
	},
	image: {
		width: '100%',
	    height: 'auto'
	}
}));

//PRESENTATION
export default function HomePresentation(props) {
    const classes = useStyles();
	const [toggleButton, setToggleButton] = useState(true)
	const contentMain = [
	{
		title: '병사는',
		description: '점호인원 파악을 1시간씩이나 하시나요?'
	},
	{
		title: '10초면 언제든 충분한데요!',
		description: ''
	},
	{
		title: '지휘관님!',
		description: '복무기간 단축으로 병력 약화가 걱정되신다구요?',
	},
	{
		title: '병 배속 최적화가 필요하군요!',
		description: ''
	},
	{
		title: '점호병을 소개합니다!',
		description: ':삼군통합 병사 점호관리 및 근태관리 시스템'
	},
	{
		title: '지금 바로 사용하세요!',
		description: '300여명의 10일치 데이터로 바로 데모도 가능합니다!',
	}
	];
	const contentDevStack = [
	{
		title: 'React',
		description: 'Stateless Component를 구현해 개발의 복잡도를 낮췄습니다.',
		userProfile: "https://cdn.auth0.com/blog/react-js/react.png"
	},
	{
		title: 'Material-UI',
		description: 'Material-UI를 활용해 디자인에 소요되는 시간 비용을 낮추고, 깔끔한 디자인을 얻었습니다.',
		userProfile: "https://cdn.worldvectorlogo.com/logos/material-ui.svg"
	},
	{
		title: 'Redux',
		description: '내부 데이터 중 공유해야만 하는 데이터는 Redux에서 관리합니다.',
		userProfile: "https://miro.medium.com/max/1400/0*U2DmhXYumRyXH6X1.png"
	},
	{	
		title: 'Redux-Observable',
		description: '여러 액션을 묶어 처리해야 하는 경우, Redux-Observable을 활용해 개발의 편의를 높였습니다.',
		userProfile: "https://avatars2.githubusercontent.com/u/19417071?s=400&v=4"
	},
	{
		title: 'GraphQL',
		description: 'GQL을 활용해 클라이언트의 데이터 전처리 과정에 드는 비용을 최소화했습니다.',
		userProfile: "https://codingthesmartway.com/wp-content/uploads/2018/01/logo_graphql.png"
	},
	{
		title: 'Apollo',
		description: 'Apollo를 활용해 서버의 GQL과 효과적으로 통신합니다.',
		userProfile: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/216/thumb/apollo-seeklogo.com_%281%29.png"
	},
	{
		title: 'Postgresql',
		description: '데이터베이스를 활용해 데이터를 실제로 서버에 저장합니다.',
		userProfile: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
	},
	{
		title: 'Sequelize',
		description: '데이터베이스를 빠르게 initialize합니다. 병사 300 여명의 시드 데이터가 생성됩니다.',
		userProfile: "https://hyunseob.github.io/images/sequelizejs.png"
	}
	];
	const [content, setContent] = useState(contentMain)
	
	const handleButtonClick = (e) => {
		e.preventDefault()
		setToggleButton(!toggleButton)
		if(toggleButton){
			setContent(contentDevStack)	
		}else{
			setContent(contentMain)
		}
	}
	
    return (
        <div>
			<div className={classes.header}>
				<Link to="/">
					<button className={classes.buttonLeft}>Home</button>
				</Link>
				<Link to="/">
				</Link>
				{props.authenticated ? (
					<LogOut className={classes.buttonRight} logout={props.logout} />
				) : (
					<Link to="/login">
						<button className={classes.buttonRight}>Login</button>
					</Link>
				)}
				<button className={classes.buttonRight2} onClick={handleButtonClick}>
					{toggleButton? "DevStack":"점호병보기"}
				</button>
			</div>
            <Slider content={content}/>
        </div>
    );
}


// /*
// 로고
// <button style={{height:0, width:0, background:'white', border:'none', shadow:'none'}}>
// 					<div className={classes.container}>
// 						<img className={classes.image} src={require("./logo.png")} alt="my image" />
// 					</div>
// 				</button>
// */