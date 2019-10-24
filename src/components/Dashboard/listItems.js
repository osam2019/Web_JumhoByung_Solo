import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AirplayIcon from '@material-ui/icons/Airplay';
import CommentIcon from '@material-ui/icons/Comment';

export function MainListItems(props){
	function handleClick(e){
		props.handleClick(e)
	}
	
	return(
	<div>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="근무입력하기" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary="점호인원보기" />
        </ListItem>
			{/*<ListItem button onClick={handleClick}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="결재" />
        </ListItem>*/}
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="병사입력관리" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="부서별 근무분석" />
        </ListItem>
			{/*<ListItem button onClick={handleClick}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="지역별 근무분석" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="여유인원 근무분석" />
        </ListItem>
		<ListItem button onClick={handleClick}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="공지사항" />
        </ListItem>
		<ListItem button onClick={handleClick}>
            <ListItemIcon>
                <CommentIcon />
            </ListItemIcon>
            <ListItemText primary="채팅" />
        </ListItem>*/}
    </div>
	)
}

export function SecondaryListItems(props){
	function handleClick(e){
		props.handleClick(e)
	}
	return (
	<div>
        <ListSubheader inset>내 정보</ListSubheader>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="내 정보 수정하기" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="내 근무 돌아보기" />
        </ListItem>
    </div>
	)
}