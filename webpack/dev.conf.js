const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./base.conf');

module.exports = webpackMerge(webpackBaseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: {
            rewrites: [
              { from: /.*/, to: '/index.html' },
            ],
        },
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
    ]
});