const app = require('koa')();
const compose = require('koa-compose');

// error handler
require('koa-onerror')(app);
// 模板引擎
require('./module/render').start(app),

// global middlewares
app.use(compose([
    require('koa-bodyparser')(),
    require('koa-json')(),
    require('koa-logger')(),

    // 数据库操作
    require('./module/mongoose'),
    // 路由
    require('./routes')(),
    // 静态资源
    require('koa-static')(__dirname + '/public')
]));

module.exports = app;

// app.use(function* (next){
//     var start = new Date;
//     yield next;
//     var ms = new Date - start;
//     console.log('%s %s - %s', this.method, this.url, ms);
// });