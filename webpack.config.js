const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

module.exports = {
	entry: './src/ReactNavbar/index.js',
	output: {
		library: 'ReactNavbar',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'lib'),
		filename: 'ReactNavbar.js'
	},
	externals: webpackUMDExternal({
		'react': 'react',
		'react-dom': 'react-dom',
		'react-addons-css-transition-group': 'react-addons-css-transition-group'
	}),
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
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
