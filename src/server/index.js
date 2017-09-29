const koa = require('koa');
const cors = require('koa-cors');
const app = new koa();
// const middlewares = require('koa-middlewares');
const router = require('koa-route');

app.use(cors());
// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

// app.use(middlewares.bodyParser());
// app.use(middlewares.router(app));

// router.get('/test', () => {
//     console.log(arguments);
//     console.log(this);
// });
app.use(router.get('/', (ctx) => {
    console.log(arguments);
    console.log(this);
    ctx.body = 'Hello world!';
}));

app.use(router.get('/test1', function* () {
    console.log(arguments);
    console.log(this);
    this.body = 'Hello world! test1';
}));
//
// router.post('/login', (ctx) => {
//     console.log(arguments);
//     console.log(this);
// });

app.use(router.post('/validate', (ctx, data) => {
    // console.log(data);
    console.log(ctx.request.body);
    // console.log(this);
    // console.log(this.params);
    ctx.body = 'Ok';
}));

// app.use(router.routes())
//     .use(router.allowedMethods());

app.listen(3001);