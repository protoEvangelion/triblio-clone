const fs = require('fs');
const util = require('util');
const glob = util.promisify(require('glob'));
const svgr = require('@svgr/core').default;

async function convertSvgsIntoReactComponents() {
	try {
		var filePaths = await glob(`${process.cwd()}/assets/svgs/*.svg`);
	} catch (e) {
		throw new Error(`Error generating svgs => ${e}`);
	}

	const svgComponentMap = {};

	for (let i = 0; i < filePaths.length; i++) {
		const file = filePaths[i];
		const svgMarkup = fs.readFileSync(file, { encoding: 'utf8' });
		const fileName = file.substring(file.lastIndexOf('/') + 1);
		const svgName = fileName.substring(0, fileName.indexOf('.svg'));

		const svgComponent = await svgr(
			svgMarkup,
			{ icon: true, dimensions: false },
			{ componentName: svgName }
		);

		const svgWithoutImportOrExport = svgComponent
			.substring(0, svgComponent.lastIndexOf('export default'))
			.substring(svgComponent.indexOf('props'))
			.replace(`import React from 'react'`, '')
			.replace(/\n/g, ' ')
			.replace(/\t/g, '')
			.replace(/;/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		svgComponentMap[svgName] = svgWithoutImportOrExport;
	}

	const outputFile = `${process.cwd()}/src/components/atoms/Svg/generatedSvgs.js`;

	fs.writeFileSync(outputFile, util.inspect(svgComponentMap));

	const fileWithStringFunctions = fs.readFileSync(outputFile, {
		encoding: 'utf8',
	});

	const validReactFile = `
		import React from 'react'
		export default ${fileWithStringFunctions.replace(/'/g, '')}
	`;

	fs.writeFileSync(outputFile, validReactFile);
}

convertSvgsIntoReactComponents();
