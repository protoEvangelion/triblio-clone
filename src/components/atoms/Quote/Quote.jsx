import React from 'react';

function Quote({children, quotee, quoteeTitle}) {
	return (
		<div className="quote-wrapper">
			<p className="large quote">{children}</p>

			<p className="f6">
				<span className="quotee">{quotee}</span>
				<span> </span>
				<span className="quotee-title">{quoteeTitle}</span>
			</p>
		</div>
	);
}

export default Quote;
