
import React from 'react';
import Tree from 'react-tree-graph';
// import styles from './Tree.css'
import { easeElastic } from 'd3-ease';

let data = {
    name: '공군',
    children: [{
        name: '교육사령부'
    }, {
        name: '제3훈련비행단',
		children: [
			{
			name: '항공작전전대',
			children: [{
				name: '항공작전과'
				}]
			},
			{
			name: '장비정비전대',
			children: [
				{
					name: '장비과'
				},
				{
					name: '정비과'
				},
			]
				
		}
			]
    }]
};

export default function TreePresentation() {
	return <div className="custom-container">
	<Tree
		data={data}
		height={360}
		width={400}
		animated
		duration={600}
		svgProps={{
			className: 'custom'
		}}>
		<text
		dy="15"
		dx="5"
		stroke="#000000"
		fill="#000000">
		Custom Title
		</text>
	</Tree>
</div>
}
