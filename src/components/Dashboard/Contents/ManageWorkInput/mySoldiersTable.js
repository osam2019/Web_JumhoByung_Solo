import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import DateRangePicker from 'react-daterange-picker'


export default class MySoldiersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: makeData(),
	  dateToggle: false,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
		  filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[{
      Header: '병사 프로필',
      columns: [{
        Header: '근무일',
        accessor: 'date',
		filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
        ,
		Cell: row => (
			<div style={{textAlign: 'center'}}>
				{row.value}	
			</div>
		)
      }, {
        Header: '계급',
        accessor: 'class',
		filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    else if (filter.value === "병장") {
                    	return row[filter.id] === "병장";
                    }
					else if (filter.value === "상병") {
						return row[filter.id] === "상병";
					}
					else if (filter.value === "일병") {
                      return row[filter.id] === "일병";
                    }
                    return row[filter.id] === "이병";
                  },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          >
            <option value="all">전체보기</option>
            <option value="병장">병장</option>
            <option value="상병">상병</option>
			<option value="일병">일병</option>
			<option value="이병">이병</option>
          </select>),
		Cell: row => (
			<div style={{textAlign: 'center'}}>
				{row.value}	
			</div>
		)
      }, {
        Header: '이름',
        id: 'lastName',
        accessor: "name",
		filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
        ,
		  Cell: row => (
			<div style={{textAlign: 'center'}}>
				{row.value}	
			</div>
		)
      }, {
        Header: '군번',
        accessor: 'militaryNumber',
		filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
        ,
		Cell: row => (
			<div style={{textAlign: 'center'}}>
				{row.value}	
			</div>
		)
      }]
    }, {
      Header: '근무 및 입력 정보',
      columns: [{
        Header: '근무 타입',
        accessor: 'workTypes',
		filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
        ,
		  Cell: ({row, original}) => (
			<div style={{textAlign: 'center'}}>
				  {original.status==="미완료"? "" : original.workTypes}
			</div>
		)
      }, {
        Header: '근무 시간',
        accessor: 'workTimes',
		filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
        ,
		  Cell: ({row, original}) => (
			<div style={{textAlign: 'center'}}>
				  {original.status==="미완료"? "" : original.workTimes}
			</div>
		)
      }, {
        Header: '입력 상태',
        accessor: 'status',
		filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] === "완료";
                    }
                    return row[filter.id] === "미완료";
                  },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          >
            <option value="all">전체보기</option>
            <option value="true">완료</option>
            <option value="false">미완료</option>
          </select>),
    	Cell: row => (
			<div style={{textAlign: 'center'}}>
				<span>
					<span 
						style={{
							height: '10px', 
							width: '10px', 
							backgroundColor:  row.value === '완료' ? '#57d500' :'#ff2e00',
							borderRadius: '50%', 
							display: 'inline-block',
							transition: 'all .3s ease ease-out',
							}} 
						class="dot">
					</span>
					{row.value === '완료' ? ' 완료' : ' 미완료' }
				</span>
			</div>
        )
      }]
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
		  previousText="이전 페이지"
   		  nextText="다음 페이지"
        />
        <br />
      </div>
    );
  }
}