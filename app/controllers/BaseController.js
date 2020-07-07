const templates = require('../views/templates');
const BookController = require('./BookController');

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
        return (req, resp, next) => {
            const passport = req.passport;
            passport.authenticate('local', (err, user, info) => {
                if(info){
                    console.log(info);
                    return resp.marko(templates.base.login);
                }

                if(err){
                    console.log(err);
                    return next(err);
                }

                req.login(user, (err) => {
                    if(err){
                        console.log(err);
                        return next(err);
                    }

                    return resp.redirect(BookController.routes().list);
                });
            })(req, resp, next);
        };
    }

}

module.exports = BaseController;