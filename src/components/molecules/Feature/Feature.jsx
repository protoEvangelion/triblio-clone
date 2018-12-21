import React from 'react';
import Svg from '../../atoms/Svg/Svg';

function Feature({ info }) {
	return (
		<div className="feature">
			<div className="icon-wrapper">
				<Svg name={info.icon} />
			</div>

			<div>
				<h4 className="heading">
					{info.heading}
				</h4>

				<p>
					{info.description}
				</p>
			</div>
		</div>
	);
}

export default Feature;
