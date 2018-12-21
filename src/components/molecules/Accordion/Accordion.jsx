import React, {Component} from 'react';
import Svg from '../../atoms/Svg/Svg';
import componentUtils from '../../../utils/componentUtils';
import PropTypes from 'prop-types';

class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: props.isOpen,
		};

		this.handleAccordionClick = this.handleAccordionClick.bind(this);
	}

	handleAccordionClick() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div className={`accordion ${this.state.isOpen ? 'isOpen' : ''}`}>
				<header onClick={this.handleAccordionClick}>
					{this.props.icon && (
						<div className="icon">
							<Svg
								width="30px"
								height="30px"
								name={this.props.icon}
							/>
						</div>
					)}

					<div className="header-content">
						<div className="title">{this.props.title}</div>
					</div>

					<div className="toggle-icon-container">
						<Svg name="moreCircle" height="35" width="35" />
					</div>
				</header>

				<div className="accordion-content">
					<div className="feature-media">
						{componentUtils.renderMedia(
							this.props.featuredMediaURI,
							this.props.featuredMediaName
						)}
					</div>
					<aside>
						<div
							className="feature-content"
							dangerouslySetInnerHTML={this.props.content}
						/>

						{this.props.linkUrl && (
							<div className="content-cta">
								<a href={this.props.linkUrl}>
									Learn More About {this.props.name}
								</a>
							</div>
						)}
					</aside>
				</div>
			</div>
		);
	}
}

Accordion.propTypes = {
	icon: PropTypes.string,
	isOpen: PropTypes.bool,
	linkUrl: PropTypes.string,
	featuredMediaURI: PropTypes.string,
	featuredMediaName: PropTypes.string,
};

export default Accordion;
