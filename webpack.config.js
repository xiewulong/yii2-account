/*!
 * webpack config - account
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/01/03
 * since: 0.0.1
 */
const PATH = require('path');
const FS = require('fs');
const BASE_PATH = __dirname;
const ENV = process.argv.indexOf('-p') >= 0 || process.argv.indexOf('--optimize-minimize') >= 0 ? 'production' : 'development';
const MIN = ENV == 'production' ? '.min' : '';

let webpack = require('webpack');
let webpackExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	// devtool: ENV == 'production' ? '#source-map' : '#eval-source-map',

	// devtool: 'source-map',

	entry: {
		account: PATH.join(BASE_PATH, 'js', 'account'),
	},

	output: {
		path: PATH.join(BASE_PATH, 'dist', 'js'),
		filename: `[name]${MIN}.js`,
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
		},
		extensions: ['', '.js', '.json', '.vue'],
	},

	externals: {
		vue: 'Vue',
		vuex: 'Vuex',
	},

	module: {
		loaders: [
			{
				test: /\.(gif|jpe?g|png)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 8192,
					name: '../images/[name].[ext]',
				},
			},
			{
				test: /\.css$/,
				loader: webpackExtractTextPlugin.extract('style-loader', 'css!postcss?sourceMap'),
			},
			{
				test: /\.scss$/,
				loader: webpackExtractTextPlugin.extract('style-loader', 'css!postcss!sass?sourceMap'),
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue',
			},
		],
	},

	vue: {
		loaders: {
			scss: webpackExtractTextPlugin.extract("css!sass?sourceMap"),
		},
		postcss: [
			require('autoprefixer'),
		],
	},

	postcss: [
		require('autoprefixer'),
	],

	plugins: [

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: `'${ENV}'`,
			},
		}),

		new webpack.optimize.OccurrenceOrderPlugin(),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),

		new webpackExtractTextPlugin(PATH.join('..', 'css', `[name]${MIN}.css`)),
	],

};
