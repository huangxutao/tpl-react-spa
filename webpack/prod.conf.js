const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./base.conf');
const { resolvePath, assetsPath } = require('../tools/utils');

module.exports = webpackMerge(webpackBaseConfig, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 , module: true, sourceMap: false } },
                        'postcss-loader'
                    ]
                }),
                include: [resolvePath('src'), resolvePath('test')]
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false
              }
            },
            sourceMap: false,
            parallel: true
        }),
        new HtmlWebpackPlugin({
            filename: resolvePath('build/index.html'),
            template: 'index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({
            filename: assetsPath('style.css'),
            allChunks: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: false
              ? { safe: true, map: { inline: false } }
              : { safe: true }
        }),
    ]
});