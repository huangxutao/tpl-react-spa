const { resolvePath } = require('../tools/utils');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: './build/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolvePath('src')]
            }
        ]
    }
};
