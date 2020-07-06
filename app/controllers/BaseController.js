const BookController = require('../controllers/BookController')

class BaseController{
    constructor(){
        
    }

    static routes(){
        return {
            home: '/'
        }
    }

    home(){
        return (req, resp ) => resp.redirect(BookController.routes().list);
    }
}

module.exports = BaseController;