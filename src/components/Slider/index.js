//IMPORT REACT
import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';

export default function mySlider(props){
	return (
		<Slider
     		className="slider-wrapper"
			autoplay="2000">
			{props.content.map((article, index) =>
				<div
					key={index}
					className="slider-content"
					style={{
						backgroundImage: `url('${article.image}')`,
						backgroundSize: '50%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						width: '100%',
					}}
				>
					<div className="inner" key={index}>
						{article.userProfile?
							<div className="slider-content">
								<img src={article.userProfile} alt={"noImage"}></img>
							</div>
							: null
						}
						<h1>{article.title}</h1>
						<h2>{article.description}</h2>
					</div>
				</div>
			)}
		</Slider>
	)
}