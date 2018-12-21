import React from 'react';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import Quote from '../../atoms/Quote/Quote';

function QuoteBlock({ children, quotee, quoteeTitle, url }) {
	return (
		<blockquote className="quote-block-wrapper">
			<div className="quote-block">
				<Quote quotee={quotee} quoteeTitle={quoteeTitle}>
					{children}
				</Quote>

				<ProfileImage url={url} />
			</div>
		</blockquote>
	);
}

export default QuoteBlock;
