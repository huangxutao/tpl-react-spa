const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();
const router = require('./router');

// use router
app.use(router.routes());

// 404
app.use(async (ctx) => {
    const message = `\n🚫 ${ctx.request.url} 🚫 \n not found, please check the mock data!\n`;

    console.log(chalk.bold.yellow(message));
    ctx.status = 404;
    ctx.body = {
        status: false,
        message
    };
});

// run server
app.listen(3001, () => {
    console.log(chalk.bold.green('Mock server run at 3001 port ...\n'));
});
