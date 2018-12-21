import PropTypes from 'prop-types';
import React from 'react';
import SvgsObject from './generatedSvgs';

const Svg = ({
	className,
	fill,
	height,
	width,
	name,
	style,
	margin,
	rotate,
	...props
}) => {
	const styles = {
		...style,
		margin,
	};

	if (rotate) {
		styles.transform = `rotate(${rotate}deg)`;
		styles.transition = 'transform 0.5s';
	}

	const DynamicSvg = SvgsObject[name];

	if (!DynamicSvg) {
		console.log(`${name} Svg not found`);
	}

	return DynamicSvg ? (
		<DynamicSvg
			{...props}
			className={className}
			height={height}
			name={name}
			style={styles}
			width={width}
		/>
	) : (
		<span />
	);
};

Svg.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	name: PropTypes.string.isRequired,
	style: PropTypes.object,
	margin: PropTypes.string,
	rotate: PropTypes.number,
};

export default Svg;
