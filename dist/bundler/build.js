import autoprefixer from 'autoprefixer';
import fs from 'fs';
import postcss from 'postcss';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import sass from 'node-sass';
import webpack from 'webpack';

const outputDir = `${process.cwd()}/dist`;

const webpackOptions = {
	entry: {
		home: `${__dirname}/homeEntry.js`,
		product: `${__dirname}/productEntry.js`,
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env'], '@babel/preset-react'],
					},
				},
			},
		],
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		filename: '[name]Bundle.js',
		path: `${outputDir}/bundler`,
		libraryTarget: 'umd',
	},
};

const pages = [
	'Home',
	'Product',
	'Footer',
	'Video',
	'Cta',
	'Quote',
	'Typography',
];

webpack(webpackOptions, (err, stats) => {
	if (err || stats.hasErrors()) {
		console.log(`WEBPACK ERRORS: ${err}, ${stats}`);
	}

	pages.forEach(page => {
		const dir = `${process.cwd()}/src/pages/${page}/${page}`;

		const Component = require(`${dir}.jsx`).default;

		const css = sass
			.renderSync({
				file: `${dir}.scss`,
				outputStyle: 'compressed',
			})
			.css.toString('utf8');

		postcss([autoprefixer])
			.process(css, {
				from: `${dir}.scss`,
				to: `${outputDir}/${page}.html`,
			})
			.then(result => {
				result.warnings().forEach(warn => {
					console.warn(warn.toString());
				});

				let jsBundle;
				let jsDir = `${__dirname}/${page}Bundle.js`;

				if (page === 'Footer') {
					jsDir = `${process.cwd()}/src/pages/${page}/footerToggle.js`;
				} else if (page === 'Video') {
					jsDir = `${process.cwd()}/src/pages/${page}/videoToggle.js`;
				}

				try {
					jsBundle = fs.readFileSync(jsDir);
				} catch (error) {
					console.log(`Skipping js bundle for ${page}`);
				}

				const trimmedHtml = htmlTemplate(
					Component,
					result.css,
					jsBundle
				);

				fs.writeFileSync(`${outputDir}/${page}.html`, trimmedHtml);
			});
	});
});

function htmlTemplate(Component, css, js, testPage) {
	const bodyMarkup = `
		<style>
			${css}
		</style>

		${
			js
				? `
					<div id="reactRoot">${ReactDOMServer.renderToString(<Component />)}</div>
					<script>${js}</script>
				`
				: `${ReactDOMServer.renderToStaticMarkup(<Component />)}`
		}
	`;

	const html = testPage
		? `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Document</title>
			<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
			<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
		</head>
		<body>
			${bodyMarkup}
		</body>
		</html>
	`
		: bodyMarkup;

	return html.replace(/\t|\n\n/g, '');
}
