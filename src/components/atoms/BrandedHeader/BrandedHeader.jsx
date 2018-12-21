import React from 'react';

function BrandedHeader({ center, text }) {
	return (
		<h3 className={`branded-header ${center ? 'center' : ''}`}>
			{text}
		</h3>
	);
}

export default BrandedHeader;
