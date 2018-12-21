import React from 'react';
import BrandedHeader from '../../atoms/BrandedHeader/BrandedHeader';

function InfoBlock({ info, text }) {
	return (
		<div className="info-block">
			<BrandedHeader className="semibold" text={text} />

			<p className="large">
				{info}
			</p>
		</div>
	);
}

export default InfoBlock;
