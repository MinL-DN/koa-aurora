const fs = require('fs');
const path = require('path');

// 3.0以上的compose是为了koa2的。此处使用版本为koa2.5.1
const compose = require('koa-compose');
const router = require('koa-router')();

let routerList = [];

fs.readdirSync(path.join(__dirname)).map((v, i) => {
    if(v !== 'index.js') routerList.push(require('./' + v)(router));
});

module.exports = (next) => compose(routerList);