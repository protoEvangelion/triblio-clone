import React from 'react';
import Feature from '../../molecules/Feature/Feature';
import Svg from '../../atoms/Svg/Svg';
import data from './data';

function CoreFeatures() {
	return (
		<section className="core-features">
			<Svg className="svg-stroke-curve" name="featuresCurve" />

			{data.map(feature => (
				<Feature key={feature.icon} info={feature} />
			))}
		</section>
	);
}

export default CoreFeatures;
