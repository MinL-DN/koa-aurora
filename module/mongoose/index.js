const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/AU');
const Schema = mongoose.Schema;
const db = mongoose.connection;


// 获取定义schema的集合
let model = {};
fs.readdirSync(path.join(__dirname, '/schema')).map((v, i) => {
    var k = v.replace(/\.js$/, '').replace(/(^[a-z])/, (re) => re.toUpperCase());
    model[k] = mongoose.model(k, new Schema(require('./schema/' + v)), k);// 1:集合名称 2:实例 3:表名称
});

// 全局获取方案
global.getDBModel = (type) => model[type]

module.exports = function* (next){

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', (callback) => {
        console.log('connect mongoDB');
    });

    yield next;
};