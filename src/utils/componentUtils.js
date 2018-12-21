import React from 'react';
import stringUtils from './stringUtils';

var renderMedia = function(fileURI, name) {
	var filetype = stringUtils.detectFileType(fileURI);

	if (stringUtils.isImage(filetype)) {
		return <img src={fileURI} alt={name} />;
	} else if (filetype === 'mp4') {
		return (
			<video width="100%" autoPlay loop>
				<source src={fileURI} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		);
	}
};

export default {renderMedia};
