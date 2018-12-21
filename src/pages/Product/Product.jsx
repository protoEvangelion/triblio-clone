import React, {Component} from 'react';
import ProductHero from '../../components/organisms/ProductHero/ProductHero';

import QuoteBlock from '../../components/organisms/QuoteBlock/QuoteBlock';
import PlatformFeatures from '../../components/organisms/PlatformFeatures/PlatformFeatures';
import Architecture from '../../components/organisms/Architecture/Architecture';
import CTA from '../../components/organisms/CTA/CTA';

class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {visible: false};

		this._toggle = this._toggle.bind(this);
	}

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);

		const sectionName = urlParams.get('section');

		const section = document.querySelector(`#${sectionName}`);

		if (section) {
			const sectionScrollPos = section.offsetTop;

			window.scrollTo({
				top: sectionScrollPos,
				behavior: 'smooth',
			});
		}
	}

	_toggle() {
		this.setState(state => ({visible: !state.visible}));
	}

	render() {
		return (
			<main
				className={`triblio-custom animated-bg ${
					this.state.visible ? 'add-background' : ''
				}`}
			>
				<ProductHero />

				<QuoteBlock
					quotee="Eric Martin"
					quoteeTitle="Director of Marketing Programs, Salesloft"
					url="https://triblio.com/wp-content/uploads/2017/10/EricTransparent.png"
				>
					We chose Triblio because it's extremely powerful. 2-3x more
					conversions
				</QuoteBlock>

				<PlatformFeatures />

				<QuoteBlock
					quotee="Brendon O'Donovan"
					quoteeTitle="VP of Marketing, Aquicore"
					url="https://triblio.com/wp-content/uploads/2017/10/BrendonODonovan.jpg"
				>
					With ABM, we can engage more stakeholders during the sales
					process.
				</QuoteBlock>

				<Architecture />

				<CTA
					toggleVisibility={this._toggle}
					visible={this.state.visible}
				/>
			</main>
		);
	}
}

export default Product;
