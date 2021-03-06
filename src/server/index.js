const koa = require('koa');
const cors = require('@koa/cors');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const router = require('koa-route');

app.use(cors());
app.use(bodyParser());

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

app.use(router.post('/validate', (ctx) => {

    const {username, password} = ctx.request.body;
    if (['john', 'paul', 'george', 'ringo'].includes(username)) {
        console.error(username, 'is taken');
        return ctx.throw(418, JSON.stringify({username: 'That username is taken'}));
    } else {
        ctx.status = 200;
    }
}));


app.listen(3001);