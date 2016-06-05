const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'App.js',
		publicPath: '/dist/',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['es2015', 'react', 'stage-0'],
			}
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.scss$/,
      loaders: ["style", "css", "sass"]
		}, {
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}, {
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader: 'file-loader?limit=100000'
		}]
	},
	devServer: {
		port: 3000
	}
};
