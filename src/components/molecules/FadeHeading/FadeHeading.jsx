import React, {Component} from 'react';

export default class FadeHeading extends Component {
	retriggerAnimation(e) {
		const wordNodes = [...e.target.parentElement.children];

		wordNodes.forEach((node, i) => {
			const className = `animated-word-${i + 1}`;
			node.classList.remove(className);
			void node.offsetWidth;
			node.classList.add(className);
		});
	}

	render() {
		return (
			<h1 className="fade-heading">
				<div className="word-animation-container">
					{this.props.words.map((word, i, arr) => {
						let animation = {};

						if (arr.length - 1 === i) {
							animation = {
								onAnimationEnd: this.retriggerAnimation,
							};
						}

						return (
							<span
								className={`animated-word animated-word-${i +
									1}`}
								key={word}
								{...animation}
							>
								{word}
							</span>
						);
					})}
				</div>

				<span className="static-text">
					your pipeline&nbsp;for <span>1 to 10,000 accounts</span>
				</span>
			</h1>
		);
	}
}
