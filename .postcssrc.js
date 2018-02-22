// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-import": {},
        "postcss-cssnext": {
            warnForDuplicates: false
        },
        "cssnano": {},  // 压缩优化 CSS
        "postcss-nested": {}
    }
}