const home = require('../server/home');

module.exports = function(router){
    // 框架
    router.get('/', home.index);
    // 首页
    router.get('/Home', home.home);

    return router.routes();
};
