import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Dashboard/Title';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export default function UserInfo(props) {
    return (
        <React.Fragment>
            <Title>사용자 정보</Title>
            <Typography variant="subtitle2" gutterBottom>
                이름: {props.myInfo.username}
                <br />
                이메일: {props.myInfo.email}
                <br />
                군번: {props.myInfo.militaryServiceNumber}
                <br />
                입대일: {props.myInfo.serviceStart}
                <br />
                전역일: {props.myInfo.serviceEnd}
            </Typography>
        </React.Fragment>
    );
}