const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': { import: './scripts/app.js', dependOn: ['polyfill']},
		// 'vendor': ['angular', 'moment'],
		'polyfill': ['core-js']
	},
	context: __dirname,
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	externals: {
		jquery: 'jQuery'
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
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
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			description: 'Test',
			template: './public/index.html'
        })
	]
}