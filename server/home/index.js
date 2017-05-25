const taskModel = getDBModel('Task');

module.exports = {
    // 框架
    index: function* () {
        yield this.render('shared/layout_iframe', {
            layout: false,
            title: 'Hello World Koa!'
        });
    },

    // 首页
    home: function* () {

        // var aa = yield taskModel.find()
        //     .sort(_data.orderField ? (_data.orderIndex == 1 ? '' : '-' ) + _data.orderField : '-TMId')
        //     .limit(10)
        //     .skip((_obj.pageIndex - 1) * _obj.pageSize).exec();

        yield this.render('home/index', {
            title: 'Hello World Koa!',
            list: yield taskModel.find().limit(10).exec(),
            count: yield taskModel.count() // 总数
        });
    }
}