import React from 'react';

export default props => (
	<svg viewBox="0 0 202 202" fill="none" {...props}>
		<g opacity={0.45} filter="url(#play_filter)">
			<path
				d="M181.5 91c0 44.459-36.041 80.5-80.5 80.5S20.5 135.459 20.5 91 56.541 10.5 101 10.5s80.5 36.041 80.5 80.5z"
				stroke="#fff"
				strokeOpacity={0.247}
			/>
		</g>
		<g filter="url(#play_filter2)">
			<path
				d="M166.5 91c0 36.175-29.325 65.5-65.5 65.5S35.5 127.175 35.5 91 64.825 25.5 101 25.5s65.5 29.325 65.5 65.5z"
				stroke="#fff"
				strokeOpacity={0.247}
			/>
		</g>
		<g filter="url(#play_filter3)">
			<path
				className="outerCircle"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M101 143c28.719 0 52-23.281 52-52s-23.281-52-52-52-52 23.281-52 52 23.281 52 52 52z"
				fill="#fff"
			/>
			<path
				d="M152.5 91c0 28.443-23.057 51.5-51.5 51.5S49.5 119.443 49.5 91 72.557 39.5 101 39.5s51.5 23.057 51.5 51.5z"
				stroke="#69B11D"
				strokeOpacity={0.602}
			/>
		</g>
		<circle cx={101} cy={91} r={40} fill="url(#play_linear)" />
		<path
			className="playButton"
			d="M93 107.245v-33.49c0-2.6 3.082-3.969 5.012-2.225l18.526 16.744a3.001 3.001 0 0 1 0 4.452L98.012 109.47c-1.93 1.744-5.012.375-5.012-2.225z"
			fill="#fff"
		/>
		<defs>
			<filter
				id="play_filter"
				x={0}
				y={0}
				width={202}
				height={202}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={10} /> <feGaussianBlur stdDeviation={10} />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.206409 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow"
					result="shape"
				/>
			</filter>
			<filter
				id="play_filter2"
				x={15}
				y={15}
				width={172}
				height={172}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={10} /> <feGaussianBlur stdDeviation={10} />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.206409 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow"
					result="shape"
				/>
			</filter>
			<filter
				id="play_filter3"
				x={29}
				y={29}
				width={144}
				height={144}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={10} /> <feGaussianBlur stdDeviation={10} />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.206409 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow"
					result="shape"
				/>
			</filter>
			<linearGradient
				id="play_linear"
				x1={141}
				y1={51}
				x2={61}
				y2={91}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#79CD51" />
				<stop offset={1} stopColor="#19AB4F" />
			</linearGradient>
			<linearGradient
				id="play_linear2"
				x1={153}
				y1={39}
				x2={49}
				y2={91}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#79CD51" />
				<stop offset={1} stopColor="#19AB4F" />
			</linearGradient>
		</defs>
	</svg>
);
