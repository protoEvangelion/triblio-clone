(function setupVideoState() {
	const videoNodes = document.getElementsByClassName('quote-video');

	[...videoNodes].forEach(video => {
		let playState = false;

		video.querySelector('.video-img').addEventListener('click', () => {
			playState = !playState;

			const iframeNode = video.querySelector('iframe');
			const videoWrapperNode = video.querySelector('.video');

			videoWrapperNode.classList.toggle('active');

			iframeNode.src = `${iframeNode.src}${
				playState ? '&autoplay=1' : ''
			}`;
		});
	});
})();
