import React from 'react';
import PropTypes from 'prop-types';

function IconContentBlock({ description, elevated, imageUrl, title }) {
	return (
		<aside className={`icon-content-block ${elevated ? 'elevated' : ''}`}>
			<div className="icon-section">
				<img alt={title} src={imageUrl} />
			</div>

			<div className="content-section">
				<header>
					<h4>
						{title}
					</h4>
				</header>

				<span className="description">{description}</span>
			</div>
		</aside>
	);
}

IconContentBlock.propTypes = {
	description: PropTypes.string.isRequired,
	elevated: PropTypes.bool,
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default IconContentBlock;
