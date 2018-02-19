#!/usr/bin/env node
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'hello world';
});

app.listen(3000, () => {
    console.log('Server start at 3000 port...');
});
