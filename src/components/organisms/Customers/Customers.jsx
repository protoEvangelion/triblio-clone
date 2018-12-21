import React from 'react';
import QuoteVideo from '../../molecules/QuoteVideo/QuoteVideo';
import Svg from '../../atoms/Svg/Svg';
import logos from './logos';

function Customers() {
	return (
		<section className="customers">
			<h2 className="d1 text-center">Our Customers</h2>

			<Svg className="divider" name="divider" />

			<div className="block-container justify-space-between quote-video-container">
				<QuoteVideo
					imageURL="https://triblio.com/wp-content/uploads/2018/11/plex-image.jpg"
					logoURL="https://triblio.com/wp-content/uploads/2018/11/Bitmap-1.png"
					preheading="Scale ABM for 10,000+ Accounts"
					quote="We’re doing a tremendous amount of campaigns because it’s really easy."
					quotee="Jennifer Dimas"
					quoteeTitle="VP of Integrated Marketing"
					videoURL="https://www.youtube.com/embed/YMsPRAZzn6M?rel=0"
				/>

				<QuoteVideo
					imageURL="https://triblio.com/wp-content/uploads/2018/11/salesloft.jpg"
					logoURL="https://triblio.com/wp-content/uploads/2018/11/Bitmap-2.png"
					preheading="Launch 1:1 ABM for top accounts"
					quote="We chose Triblio because it’s extremely powerful. 2‑3x more conversions."
					quotee="Eric Martin"
					quoteeTitle="Director of Marketing Programs"
					videoURL="https://www.youtube.com/embed/xqfeFcv1suM?rel=0"
				/>
			</div>

			<div className="logos">
				{logos.map((logo, i) => (
					<div className={`block block-${i + 1}`} key={logo.alt}>
						<img alt={logo.alt} src={logo.src} />
					</div>
				))}
			</div>
		</section>
	);
}

export default Customers;
