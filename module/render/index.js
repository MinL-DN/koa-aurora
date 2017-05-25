const path = require('path');
const render = require('koa-ejs');

module.exports = {
    start(app){
        render(app, {
            root: path.join(__dirname, '../../views'),
            layout: 'shared/layout',
            viewExt: 'ejs',
        });
    }
};