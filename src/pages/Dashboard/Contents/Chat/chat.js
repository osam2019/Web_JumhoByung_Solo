//IMPORT REACT
import React, {useState} from 'react';
import 'react-chat-elements/dist/main.css';

// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Chart from 'components/Dashboard/Chart';
// import Deposits from 'components/Dashboard/Deposits';
// import Orders from 'components/Dashboard/Orders';
import { ChatItem,MessageBox,MessageList,ChatList, Input , Button, Popup, SideBar,Navbar,Dropdown     } from 'react-chat-elements'
const ChatPresentation = props => {
	return (
	<Dropdown
    buttonProps={{
        text: 'Dropdown',
    }}
    items={[
        'merhaba',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
    ]}/>
	)
	
	// const [show, setShow] = useState(false)
	// return (
	// 	<Popup
	// show={show}
	// header='Lorem ipsum dolor sit amet.'
	// headerButtons={[{
	// type: 'transparent',
	// color:'black',
	// text: 'close',
	// onClick: () => {
	// setShow(false)
	// }
	// }]}
	// text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
	// footerButtons={[{
	// color:'white',
	// backgroundColor:'#ff5e3e',
	// text:"Vazgeç",
	// },{
	// color:'white',
	// backgroundColor:'lightgreen',
	// text:"Tamam",
	// }]}/>
	// )
	// return (
	// 	<Input
	// 		placeholder="Type here..."
	// 		multiline={true}
	// 		rightButtons={
	// 			<Button
	// 				color='white'
	// 				backgroundColor='black'
	// 				text='Send'/>
	// 		}/>
	// )
	
	// return (
	// 	<ChatList
	// 	className='chat-list'
	// 	dataSource={[
	// 		{
	// 			avatar: 'https://facebook.github.io/react/img/logo.svg',
	// 			alt: 'Reactjs',
	// 			title: 'Facebook',
	// 			subtitle: 'What are you doing?',
	// 			date: new Date(),
	// 			unread: 0,
	// 		},
	// 	]}
	// 	/>
	// )
	// return(
	// 	<MessageList
	// 	className='message-list'
	// 	lockable={true}
	// 	toBottomHeight={'100%'}
	// 	dataSource={[
	// 		{
	// 			position: 'right',
	// 			type: 'text',
	// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
	// 			date: new Date(),
	// 		},
	// 		{
	// 			position: 'left',
	// 			type: 'text',
	// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
	// 			date: new Date(),
	// 		},
	// 		{
	// 			position: 'right',
	// 			type: 'text',
	// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
	// 			date: new Date(),
	// 		},
	// 		{
	// 			position: 'right',
	// 			type: 'text',
	// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
	// 			date: new Date(),
	// 		},
	// 		{
	// 			position: 'left',
	// 			type: 'text',
	// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
	// 			date: new Date(),
	// 		},
	// 	]} />
	// )
	// return (
	// 	<MessageBox
	// position={'left'}
	// type={'text'}
	// text={'react.svg'}
	// data={{
	// uri: 'https://facebook.github.io/react/img/logo.svg',
	// status: {
	// click: false,
	// loading: 0,
	// }
	// }}/>
	// )
	// return (
	// <ChatItem
	// avatar={'https://facebook.github.io/react/img/logo.svg'}
	// alt={'Reactjs'}
	// title={'Facebook'}
	// subtitle={'What are you doing?'}
	// date={new Date()}
	// unread={0} />
	
	// )
};

export default ChatPresentation;