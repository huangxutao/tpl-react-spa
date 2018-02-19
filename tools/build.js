const ora = require('ora');
const chalk = require('chalk');
const webpack =  require('webpack');
const config = require('../webpack/base.conf');

// loading icon animation
const spinner = ora('building...').start();

webpack(config, (err, data) => {
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