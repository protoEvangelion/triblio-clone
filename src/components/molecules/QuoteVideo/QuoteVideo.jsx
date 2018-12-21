import React from 'react';
import Quote from '../../atoms/Quote/Quote';
import PlayButton from './PlayButtonSvg';

export default class QuoteVideo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {playVideo: false};

		this._handlePlayVideoClick = this._handlePlayVideoClick.bind(this);
	}

	_handlePlayVideoClick() {
		this.setState({
			playVideo: true,
		});
	}

	render() {
		var backgroundURL = {
			background: `linear-gradient(rgba(0, 173, 239, 0.2), rgba(0, 173, 239, 0.2)), url(${
				this.props.imageURL
			})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		};

		return (
			<div className="quote-video">
				<p className="preheading small-caps text-center">
					{this.props.preheading}
				</p>

				<div
					className={this.state.playVideo ? 'active video' : 'video'}
				>
					<div
						className="video-img"
						onClick={this._handlePlayVideoClick}
						style={backgroundURL}
					>
						<PlayButton
							className="play"
							height="202"
							name="play"
							width="202"
						/>
					</div>

					<img
						alt="Logo"
						className="video-logo"
						src={this.props.logoURL}
					/>

					<div className="video-youtube">
						<iframe
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							frameBorder="0"
							height="100%"
							src={
								this.state.playVideo
									? this.props.videoURL + '&autoplay=1'
									: this.props.videoURL
							}
							title="triblio"
							width="100%"
						/>
					</div>
				</div>

				<div className="quote-container">
					<Quote
						children={this.props.quote}
						quotee={this.props.quotee}
						quoteeTitle={this.props.quoteeTitle}
					/>
				</div>
			</div>
		);
	}
}
