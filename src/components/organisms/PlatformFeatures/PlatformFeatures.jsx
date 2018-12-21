import React, {Component} from 'react';
import Svg from '../../atoms/Svg/Svg';
import Accordion from '../../molecules/Accordion/Accordion';
import stringUtils from '../../../utils/stringUtils';
import componentUtils from '../../../utils/componentUtils';
import features from './featureData';

class PlatformFeatures extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedTab: ''};
	}

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const featureName = urlParams.get('feature');

		var firstTabName = this.isAFeature(featureName)
			? featureName
			: stringUtils.hyphenate(features[0]['name']);

		this.setState({selectedTab: firstTabName});
	}

	handleFeatureClick(tabName) {
		this.setState({selectedTab: tabName});
	}

	isAFeature(featureName) {
		return Boolean(
			features.find(feature => {
				return stringUtils.hyphenate(feature.name) === featureName;
			})
		);
	}

	render() {
		return (
			<section
				className="platform-features-wrapper"
				id="platform-features"
			>
				<h2 className="d1 text-center">Platform Features</h2>

				<div className="platform-features-container">
					<div className="mobile">
						{features.map(feature => {
							const isOpen =
								this.state.selectedTab ===
								stringUtils.hyphenate(feature.name);

							return (
								<Accordion
									content={feature.descriptionHTML}
									featuredMediaURI={feature.mediaUrl}
									icon={feature.icon}
									key={`${feature.name}_${isOpen}`}
									linkUrl={feature.linkUrl}
									name={feature.name}
									isOpen={isOpen}
									title={feature.name}
								/>
							);
						})}
					</div>

					<div className="navigation">
						{features.map(feature => {
							const hyphenatedName = stringUtils.hyphenate(
								feature.name
							);

							return (
								<div
									className={`feature ${
										this.state.selectedTab ===
										hyphenatedName
											? 'selected'
											: ''
									}`}
									key={hyphenatedName}
									onClick={this.handleFeatureClick.bind(
										this,
										hyphenatedName
									)}
								>
									<header>
										<div className="icon">
											<Svg
												height="30"
												name={feature.icon}
												width="40"
											/>
										</div>

										<div className="header-content">
											<div className="name">
												{feature.name}
											</div>

											{feature.linkUrl && (
												<div className="cta">
													<a href={feature.linkUrl}>
														Learn More{' '}
														<Svg
															height="13"
															width="16"
															name="ctaArrow"
														/>
													</a>
												</div>
											)}
										</div>
									</header>
								</div>
							);
						})}
					</div>

					<div className="feature-details">
						{features.map(feature => {
							const hyphenatedName = stringUtils.hyphenate(
								feature.name
							);

							return (
								<div
									key={`details_${feature.name}`}
									className={`feature-detail ${
										this.state.selectedTab ===
										hyphenatedName
											? 'selected'
											: ''
									}`}
								>
									<div className="feature-media">
										{componentUtils.renderMedia(
											feature.mediaUrl,
											feature.name
										)}
									</div>

									<div className="feature-content">
										<div
											className="text"
											dangerouslySetInnerHTML={
												feature.descriptionHTML
											}
										/>

										{feature.linkUrl && (
											<div className="content-cta">
												<a href={feature.linkUrl}>
													Learn More About{' '}
													{feature.name}
												</a>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default PlatformFeatures;
