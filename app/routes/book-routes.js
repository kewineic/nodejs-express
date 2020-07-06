const BookController = require('../controllers/BookController');
const bookController = new BookController();
const Book = require('../models/Book');
const book = new Book();


module.exports = (app) => {
    const routesBook = BookController.routes();

    app.get(routesBook.list, bookController.list());
    app.route(routesBook.register) 
        .get(bookController.formAdd())
        .post(book.validators(), bookController.add())
        .put(bookController.update());
    app.get(routesBook.update, bookController.formUpdate());
    app.delete(routesBook.exclude, bookController.exclude());                 
}