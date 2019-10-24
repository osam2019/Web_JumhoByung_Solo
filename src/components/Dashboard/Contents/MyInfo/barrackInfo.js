import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Dashboard/Title';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export default function UnitInfo(props) {
    return (
        <React.Fragment>
            <Title>생활관 정보</Title>
            <Typography variant="subtitle2" gutterBottom>
                생활건물: 토성 4 생활관
                <br />
                생활호실: 9호실
                <br />
            </Typography>
        </React.Fragment>
    );
}