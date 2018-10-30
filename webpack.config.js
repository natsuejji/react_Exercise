// get path
const path = require('path');
// extract css
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
// 將js插入#app
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = function(tem, filename, chunk){
	return 	new HtmlWebpackPlugin({
				template: `${__dirname}/src/`+ tem +'.html',
				filename: filename+'.html',
				inject: 'body',
				chunks: ['commons','vendors',chunk]
	  	  });
}
//分離第三方
var webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		index : path.join(__dirname, '/src/index.js'),
		music : path.join(__dirname, '/src/music.js'),
		vendors:['reactstrap', 'bootstrap']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module:{
		rules:[
			{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                }
            },
			{
				test: /\.(scss)$/,
				use:  [{
				  loader: 'style-loader', // inject CSS to page
				}, {
				  loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
				  loader: 'postcss-loader', // Run post css actions
				  options: {
					plugins: function () { // post css plugins, can be exported to postcss.config.js
					  return [
						require('precss'),
						require('autoprefixer')
					  ];
					}
				  }
				}, {
				  loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			  {
				test: /\.(png|jpg|gif)$/i,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  // if more than 10 kb move to this folder in build using file-loader
					  limit: 1024,
					  name: "image/[name].[ext]" 
					}
				  }
				]
			  }
		]
	},
	devServer: {
        inline: true,
        port: 8877,
	},
	optimization: {
		splitChunks:{
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	plugins:[
		HTMLWebpackPluginConfig('index','index', 'index'),
		HTMLWebpackPluginConfig('index','music', 'music'),
		
	]
};