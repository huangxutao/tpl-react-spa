const fs = require('fs');
const KoaRouter = require('koa-router');
const router = new KoaRouter();

// just a test api
router.get('/api/a.json', async (ctx, next) => {
    const resData = fs.readFileSync('./mock/data/a.json');

    ctx.body = resData;
});

module.exports = router;
