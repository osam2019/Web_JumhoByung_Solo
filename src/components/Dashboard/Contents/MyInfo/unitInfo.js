import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Dashboard/Title';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export default function UnitInfo(props) {
    return (
        <React.Fragment>
            <Title>소속 정보</Title>
            <Typography variant="subtitle2" gutterBottom>
                군: 공군
                <br />
                부대: 교육사령부
                <br />
                하위부대: 제 3 훈련 비행단
                <br />
                소속전대: 항공작전전대
                <br />
                업무: 항공작전과
            </Typography>
        </React.Fragment>
    );
}