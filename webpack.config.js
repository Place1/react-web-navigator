const path = require('path');

module.exports = {
	entry: './src/ReactNavbar/index.js',
	output: {
		library: 'ReactNavbar',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'lib'),
		filename: 'ReactNavbar.js'
	},
	externals: [{
		react: 'React',
		ReactCSSTransitionGroup: 'react-addons-css-transition-group'
	}],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}, {
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		}]
	},
	devServer: {
		port: 3000
	}
};
