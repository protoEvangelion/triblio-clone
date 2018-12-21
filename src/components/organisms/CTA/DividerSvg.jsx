import React from 'react';

export default props => (
	<svg viewBox="0 0 1044 14" fill="none" {...props}>
		<path
			d="M21.986 7H1248.01"
			stroke="url(#footer-cta-line-gradient)"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeDasharray="6 6"
		/>
		<path
			clipRule="evenodd"
			d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
			stroke="#fff"
		/>
		<defs>
			<linearGradient
				id="footer-cta-line-gradient"
				x1={1249}
				y1={6}
				x2={21}
				y2={6}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff" stopOpacity={0} />
				<stop offset={0.508} stopColor="#fff" />
			</linearGradient>
		</defs>
	</svg>
);
