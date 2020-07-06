const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();
const BookController = require('../controllers/BookController');
const bookController = new BookController();
const Book = require('../models/Book');
const book = new Book();
const routesBase = BaseController.routes();
const routesBook = BookController.routes();

module.exports = (app) => {

    app.get(routesBase.home, baseController.home());
    app.get(routesBook.list, bookController.list());
    app.get(routesBook.register, bookController.formAdd());
    app.get(routesBook.update, bookController.formUpdate());
    app.post(routesBook.list, book.validators(), bookController.add());
    app.put(routesBook.list, bookController.update());
    app.delete(routesBook.exclude, bookController.exclude());                 
}