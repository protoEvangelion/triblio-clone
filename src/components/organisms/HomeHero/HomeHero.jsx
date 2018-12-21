import React from 'react';
import Button from '../../atoms/Button/Button';
import ArrowSvg from '../../molecules/ArrowSvg/ArrowSvg';
import FadeHeading from '../../molecules/FadeHeading/FadeHeading';

const words = ['Reach', 'Engage', 'Impact'];

function Hero() {
	return (
		<section className="hero">
			<FadeHeading words={words} />

			<Button
				link="https://triblio.com/request-demo"
				onScroll={e => console.log(e)}
			>
				Talk to an Expert
			</Button>

			<ArrowSvg />

			<h3 className="max-med sub-heading">
				The ABM platform with expertise to guide you to revenue success
			</h3>
		</section>
	);
}

export default Hero;
