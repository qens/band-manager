const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();
const middlewares = require('koa-middlewares');
const router = require('koa-router')();

app.use(cors());
// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.use(middlewares.bodyParser());
// app.use(middlewares.router(app));

router.get('/test', () => {
    console.log(arguments);
    console.log(this);
});
router.get('/test2', function* () {
    console.log(arguments);
    console.log(this);
    this.body = 'Hello world!';
});

router.post('/login', (ctx) => {
    console.log(arguments);
    console.log(this);
});

router.post('/validate', function* (data, next) {
    console.log(data);
    console.log(arguments);
    console.log(this.request);
    console.log(this.params);
    this.body = 'Ok';
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);