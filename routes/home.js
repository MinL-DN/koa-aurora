const home = require('../server/home');
//

module.exports = function(router){
    router.get('/', home.index);
    return router.routes();
};
