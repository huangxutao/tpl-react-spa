const { resolvePath, assetsPath } = require('../tools/utils');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolvePath('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: assetsPath('[name].[ext]')
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};
