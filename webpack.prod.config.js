const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		'app': { import: 'scripts/app.js', dependOn: ['vendor', 'polyfill']},
		'vendor': ['angular', 'moment'],
		'polyfill': ['core-js/es6']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'production',
	externals: {
		angular: 'angular',
		jquery: 'jQuery'
	},
	optimization: {
		minimize: true,
 	   	minimizer: [new TerserPlugin()],
  	},
	module: {
		rules: [
			{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
		],
	},
	plugins: [
		new MiniCssExtractPlugin()
	]
}