const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./base.conf');
const { resolvePath, assetsPath } = require('../tools/utils');

module.exports = webpackMerge(webpackBaseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: {
            rewrites: [
              { from: /.*/, to: '/index.html' },
            ],
        },
        proxy: {
            "/api": "http://localhost:3001"
        },
        publicPath: '/',
        hot: true,
        compress: true,
        port: 3000
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            { 
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 , module: true, sourceMap: true } },
                    'postcss-loader?sourceMap=true'
                ],
                include: [resolvePath('src'), resolvePath('test')]
            },
        ]
    }
});