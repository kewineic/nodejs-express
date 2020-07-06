const templates = require('../views/templates');

class BaseController{
    constructor(){
        
    }

    static routes(){
        return {
            home: '/',
            login: '/login'
        };
    }

    home(){
        return (req, resp ) => resp.marko(
            templates.base.home
        );
    }

    login(){
        return (req, resp) => {
            resp.marko(templates.base.login);
        };
    }

    makeLogin(){
        return (req, resp) => {

        };
    }


}

module.exports = BaseController;