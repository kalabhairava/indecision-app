const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'), // should be the absolute path on your machine
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js/,
				exclude: /node_modules/
			}
		]
	}
};
