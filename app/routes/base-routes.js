const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

module.exports = (app) => {
    const routesBase = BaseController.routes();
    
    app.get(routesBase.home, baseController.home());         
    app.route(routesBase.login)
        .get(baseController.login())
        .post(baseController.makeLogin());
}