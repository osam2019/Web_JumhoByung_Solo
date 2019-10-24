import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
	LabelList
} from 'recharts';
import Title from 'components/Dashboard/Title';

// const data = [
//     {
//         name: '1 생활관',
//         attend: 5,
//         abscent: 1
//     },
//     {
//         name: '2 생활관',
//         attend: 2,
//         abscent: 4
//     },
//     {
//         name: '3 생활관',
//         attend: 5,
//         abscent: 2
//     },
//     {
//         name: '4 생활관',
//         attend: 4,
//         abscent: 1
//     },
//     {
//         name: '5 생활관',
//         attend: 5,
//         abscent: 2
//     },
//     {
//         name: '6 생활관',
//         attend: 4,
//         abscent: 3
//     },
//     {
//         name: '7 생활관',
//         attend: 2,
//         abscent: 3
//     },
//     {
//         name: '8 생활관',
//         attend: 4,
//         abscent: 3
//     },
//     {
//         name: '9 생활관',
//           attend: 4,
//         abscent: 2
//     },
//     {
//         name: '10 생활관',
//         attend: 5,
//         abscent: 1
//     },
//     {
//         name: '11 생활관',
//         attend: 5,
//         abscent: 0
//     }
// ];



export default class Example extends PureComponent {
	constructor(props) {
    super(props);
    this.state = {
		roomNumber: 0
    };
  }
	
    handleBarClick = (e) => {
		console.log(e)
		this.props.handleBarClick(Number(e.activeLabel.split(' ')[0]))
    };

    render() {
		const data = this.props.data
		.map((room, index)=>{
			return {
				name: `${index+1} 생활관`, 
				attend: room.filter(soldier => {
					return soldier.eveningAttend===true && soldier.status==="완료"
				}).length, 
				abscent: room.filter(soldiers => soldiers.eveningAttend!==true && soldiers.status==="완료").length,
				uncompleted: room.filter(soldiers => soldiers.status==="미완료").length,
		}});
		
        return (
            <React.Fragment>
				<Title>토성 4 생활관 오후 점호 인원</Title>
                <ResponsiveContainer>
                    <BarChart
                        width={900}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
						onClick={this.handleBarClick}
                    >
						<CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="attend"
                            stackId="a"
                            fill="#0088fe"
                            animationEasing="ease-in-out"
							
                        >
							<LabelList dataKey="attend" position="top"  />
						</Bar>
						<Bar
                            dataKey="abscent"
                            stackId="b"
                            fill="#ffbb28"
                            animationEasing="ease-in-out"
                            
                        >
							<LabelList dataKey="abscent" position="top"  />
						</Bar>
						<Bar
                            dataKey="uncompleted"
                            stackId="c"
                            fill="#8a8a8a"
                            animationEasing="ease-in-out"
                            
                        >
							<LabelList dataKey="uncompleted" position="top"  />
						</Bar>
                    </BarChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}