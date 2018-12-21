import React, {Component} from 'react';
import stringUtils from '../../utils/stringUtils';
import Svg from '../../components/atoms/Svg/Svg';

import navItems from './footerData';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedTab: ''};
	}

	handleNavHeaderClick(tabName) {
		this.setState({selectedTab: tabName});
	}

	isANavHeader(headerName) {
		return Boolean(
			navItems.find(header => {
				return stringUtils.hyphenate(header.name) === headerName;
			})
		);
	}

	render() {
		return (
			<main className="triblio-custom">
				<div className="align-start block-container flex footer-content footer justify-space-between max-full no-padding">
					<div className="mobile">
						<Svg name="footerLogo" height="40" width="112" />

						<div className="accordion ">
							<header>
								<div className="header-content">
									<div className="title">Platform</div>
								</div>
								<div className="toggle-icon-container">
									<Svg
										name="toggleIndicator"
										height="35"
										width="35"
									/>
								</div>
							</header>
							<div className="accordion-content">
								<aside>
									<div className="feature-content">
										<ul>
											<li className="nav-item">
												<a href="/account-based-marketing-software/">
													Product
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-solutions/">
													Solutions
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-examples/">
													Client Success
												</a>
											</li>
										</ul>
									</div>
								</aside>
							</div>
						</div>
						<div className="accordion ">
							<header>
								<div className="header-content">
									<div className="title">Company</div>
								</div>
								<div className="toggle-icon-container">
									<Svg
										name="toggleIndicator"
										height="35"
										width="35"
									/>
								</div>
							</header>
							<div className="accordion-content">
								<aside>
									<div className="feature-content">
										<ul>
											<li className="nav-item">
												<a href="/account-based-marketing-software/">
													Product
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-solutions/">
													Solutions
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-examples/">
													Client Success
												</a>
											</li>
										</ul>
									</div>
								</aside>
							</div>
						</div>
						<div className="accordion ">
							<header>
								<div className="header-content">
									<div className="title">Learn</div>
								</div>
								<div className="toggle-icon-container">
									<Svg
										name="toggleIndicator"
										height="35"
										width="35"
									/>
								</div>
							</header>
							<div className="accordion-content">
								<aside>
									<div className="feature-content">
										<ul>
											<li className="nav-item">
												<a href="/account-based-marketing-software/">
													Product
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-solutions/">
													Solutions
												</a>
											</li>
											<li className="nav-item">
												<a href="/account-based-marketing-examples/">
													Client Success
												</a>
											</li>
										</ul>
									</div>
								</aside>
							</div>
						</div>
					</div>
					<div className="flex flex-column footer-navigation w50">
						<div className="block-container navigation no-padding">
							<div className="block w33">
								<h4 className="nav-item-header">Platform</h4>
								<ul>
									<li className="nav-item">
										<a href="/account-based-marketing-software/">
											Product
										</a>
									</li>
									<li className="nav-item">
										<a href="/account-based-marketing-solutions/">
											Solutions
										</a>
									</li>
									<li className="nav-item">
										<a href="/account-based-marketing-examples/">
											Client Success
										</a>
									</li>
								</ul>
							</div>
							<div className="block w33">
								<h4 className="nav-item-header">Company</h4>
								<ul>
									<li className="nav-item">
										<a href="/about/">
											<span>About Us</span>
										</a>
									</li>
									<li className="nav-item">
										<a href="/events/">Events</a>
									</li>
									<li className="nav-item">
										<a href="/partner-program/">Partners</a>
									</li>
								</ul>
							</div>
							<div className="block w33">
								<h4 className="nav-item-header">Learn</h4>
								<ul>
									<li className="nav-item">
										<a href="/content-hub/">Content Hub</a>
									</li>
									<li className="nav-item">
										<a href="/blog/">Blog</a>
									</li>
									<li className="nav-item">
										<a href="/triblio-knowledge-base/">
											Resources
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-column footer-info w50">
						<div className="triblio-logo">
							<Svg name="footerLogo" height="40" width="112" />
						</div>
						<div className="social-media-icons">
							<ul className="align-center block-container no-padding-horizontal standard-padding-vertical flex">
								<li>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.facebook.com/triblio/"
									>
										<Svg
											name="socialFacebook"
											height="40"
											width="40"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/company/triblio"
									>
										<Svg
											name="socialLinkedIn"
											height="40"
											width="40"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.instagram.com/triblio_inc/"
									>
										<Svg
											name="socialInstagram"
											height="40"
											width="40"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://twitter.com/triblio"
									>
										<Svg
											name="socialTwitter"
											height="40"
											width="40"
										/>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.youtube.com/channel/UCg5YQVtEZiGTcquF7y0mGVw"
									>
										<Svg
											name="socialYouTube"
											height="40"
											width="40"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-address">
							<p>
								11600 Sunrise Valley Drive
								<br />
								Suite 100
								<br />
								Reston VA 20191
							</p>
						</div>
					</div>
					<div className="footer-base">
						<span className="copyright-info">
							© 2018 Triblio Inc. All Rights Reserved
						</span>
						<div className="additional-links">
							<a href="/terms">Terms</a> |{' '}
							<a href="/privacy">Privacy</a> |{' '}
							<a href="/trustsecurity">Trust Security</a>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Footer;
