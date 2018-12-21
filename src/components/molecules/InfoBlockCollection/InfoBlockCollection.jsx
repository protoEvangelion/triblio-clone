import React from 'react';
import InfoBlock from '../InfoBlock/InfoBlock';

function InfoBlockCollection({ children }) {
	return (
		<div className="info-block-collection-wrapper">
			<div className="info-block-collection max-full">
				{children().map(data => {
					return (
						<InfoBlock
							key={data.info}
							info={data.info}
							text={data.text}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default InfoBlockCollection;
