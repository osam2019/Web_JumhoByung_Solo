import React, { PureComponent } from 'react';
import Title from 'components/Dashboard/Title';

import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: '완료', value: 13 },
  { name: '미완료', value: 4 }
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
	  {`${data[index].name} ${data[index].value}`}
    </text>
  );
};

export default class PieChartWithCustomizedLabel extends PureComponent {
  render() {
    return (
		<React.Fragment>
			<Title>내 병사 입력현황[총 17명]</Title>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
		</React.Fragment>
    );
  }
}
