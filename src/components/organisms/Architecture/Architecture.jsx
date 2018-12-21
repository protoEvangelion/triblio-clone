import React from 'react';
import Svg from '../../atoms/Svg/Svg';
import ArchitectureBlock from '../../atoms/ArchitectureBlock/ArchitectureBlock';
import data from './data';
import AutoScale from 'react-auto-scale';
import Waypoint from 'react-waypoint';

class Architecture extends React.Component {
	constructor(props) {
		super(props);

		this.state = { visible: false };

		this.enter = this.enter.bind(this);
		this.leave = this.leave.bind(this);
	}

	enter() {
		this.setState({ visible: true });
	}

	leave({ currentPosition }) {
		if (currentPosition === 'below') {
			this.setState({ visible: false });
		}
	}

	render() {
		return (
			<Waypoint
				bottomOffset={'70%'}
				onEnter={this.enter}
				onLeave={this.leave}
			>
				<section
					className={`architecture section-padding ${
						this.state.visible ? 'animation-started' : ''
					} max-full`}
				>
					<h2 className="d1 text-center architecture-title">
						Triblio Architecture
					</h2>

					<AutoScale
						className="auto-scale"
						containerClass="auto-scale-wrapper"
						maxScale={1}
						maxWidth={1200}
					>
						<div className="main-architecture-container">
							<div className="main-architecture">
								<Svg
									className="architecture-background"
									name="architectureBackground"
								/>

								<Svg
									className="arrow arrow-left green-arrow"
									name="arrowLeft"
								/>

								<Svg
									className="arrow arrow-right green-arrow"
									name="arrowLeft"
								/>

								<Svg
									className="arrow arrow-left double-blue-arrow"
									name="doubleBlueArrow"
								/>

								<Svg
									className="arrow arrow-right double-blue-arrow"
									name="doubleBlueArrow"
								/>

								{data.map((props, i) => {
									const dynamicProps = {};

									if (props.outside) {
										dynamicProps.outside = props.outside;
									}

									if (props.borderColor) {
										dynamicProps.borderColor =
											props.borderColor;
									}

									if (props.category) {
										dynamicProps.inline = true;
									}

									return (
										<ArchitectureBlock
											direction={props.direction}
											i={i}
											key={`${props.name}_${i}`}
											name={props.name}
											toolTipText={props.toolTipText}
											{...dynamicProps}
										>
											{props.category && (
												<div className="align-center flex flex-column outside-subheading f4">
													{props.category}

													<Svg
														className="divider-line"
														name="dividerLine"
													/>
												</div>
											)}

											{props.text}
										</ArchitectureBlock>
									);
								})}
							</div>
						</div>
					</AutoScale>
				</section>
			</Waypoint>
		);
	}
}

export default Architecture;
