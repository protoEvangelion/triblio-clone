// hyphenate a string e.g. An Apple -> an-apple
var hyphenate = function(string) {
	return string.replace(/\s/g, '-').toLowerCase();
};

// returns file type given a string
var detectFileType = function(filename) {
	var filenameArray = filename.split('.');

	return filenameArray.length >= 1 ? filenameArray.pop() : null;
};

var isImage = function(filetype) {
	var imageFileTypes = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

	return imageFileTypes.includes(filetype);
};

export default {detectFileType, hyphenate, isImage};
