process.env.NODE_ENV = 'production';

const rm = require('rimraf');
const ora = require('ora');
const chalk = require('chalk');
const webpack =  require('webpack');
const webpackProdConfig = require('../webpack/prod.conf');
const { resolvePath } = require('../tools/utils');

// loading icon animation
const spinner = ora('building...').start();

function doBuild () {
    webpack(webpackProdConfig, (err, data) => {
        spinner.stop()
        if (err) throw err;
        process.stdout.write(data.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n');
    
        console.log(chalk.cyan('  Build complete.\n'));
    });
}

rm(resolvePath('build'), (err) => {
    if (err) throw err;
    doBuild();
});
