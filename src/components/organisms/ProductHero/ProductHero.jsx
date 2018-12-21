import React from 'react';
import Button from '../../atoms/Button/Button';
import InfoBlockCollection from '../../molecules/InfoBlockCollection/InfoBlockCollection';
import Svg from '../../atoms/Svg/Svg';

function ProductHero() {
	return (
		<section className="product-hero-wrapper">
			<Svg name="productHeroCurve" />

			<div className="product-hero max-full">
				<h1>Account Based Marketing Platform</h1>

				<h2>
					Impact Your Pipeline by Engaging and Converting Target
					Accounts
				</h2>

				<div className="button-image-container">
					<Button link="https://triblio.com/request-demo">
						Request a Demo
					</Button>

					<img
						src="https://triblio.com/wp-content/uploads/2018/12/hero.svg"
						alt="abm campaign editor"
					/>
				</div>
			</div>

			<InfoBlockCollection>
				{() => [
					{
						text: 'AI Powered',
						info:
							'Leverage AI for account identification, purchase intent, and orchestration',
					},
					{
						text: 'Unified Funnel',
						info:
							'Operationally unify the marketing funnel and sales pipeline',
					},
					{
						text: 'Multichannel Orchestration',
						info:
							'Trigger coordinated marketing and sales activities based on purchase intent',
					},
				]}
			</InfoBlockCollection>
		</section>
	);
}

export default ProductHero;
