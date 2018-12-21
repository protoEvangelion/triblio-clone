import React, { Component } from 'react';
import throttle from 'lodash.throttle';

class ArrowSvg extends Component {
	constructor(props) {
		super(props);

		const scrollStartPoint = 500;

		this.state = { topOffset: scrollStartPoint };

		this.svg = React.createRef();
		this.handleScroll = this.handleScroll.bind(this);
		this.scrollStartPoint = scrollStartPoint;
		this.throttledHandleScroll = throttle(this.handleScroll, 60);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.throttledHandleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.throttledHandleScroll);
	}

	handleScroll() {
		const topOffset = this.svg.current.getBoundingClientRect().top;

		if (topOffset < this.scrollStartPoint && topOffset > 0) {
			this.setState({ topOffset });
		}
	}

	render() {
		return (
			<div className="arrow-wrapper">
				<svg
					className="arrow-down"
					viewBox="0 0 84 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					ref={this.svg}
				>
					<path
						d={`M2 4L42 ${Math.max(
							4,
							Math.round(
								(26 / this.scrollStartPoint) *
									this.state.topOffset
							)
						)}L82 4`}
						stroke="url(#arrow_down_linear)"
						strokeWidth="8"
					/>
					<defs>
						<linearGradient
							id="arrow_down_linear"
							x1="82"
							y1="4"
							x2="58.7754"
							y2="46.2265"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#79CD51" />
							<stop offset="1" stopColor="#19AB4F" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		);
	}
}

export default ArrowSvg;
