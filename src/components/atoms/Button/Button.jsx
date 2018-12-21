import React from 'react';
import PropTypes from 'prop-types';

function Button({ color, children, link }) {
	const BaseButton = () => (
		<button className={`button ${color === 'dark' ? 'dark' : color  === 'light' ? 'light' : ''}`}><span>{children}</span></button>
	);

	return link ? (
		<a href={link}>
			<BaseButton />
		</a>
	) : (
		<BaseButton />
	);
}

Button.propTypes = {
	dark: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Button;
