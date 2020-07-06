const db = require('../../config/database');
const BookDao = require('../dao/BookDao');
const {validationResult} = require('express-validator/check');

class BookController{
    constructor(){
    }

    static routes(){
        return {
            list: '/livros',
            register: '/livros/form',
            update: '/livros/form/:id',
            exclude: '/livros/:id',
        }
    }

    list(){
       return (req, resp) => {
            const bookDao = new BookDao(db);
            bookDao.list()
                .then(livros => resp.marko(
                    require('../views/books/list/list.marko'),
                    {
                        livros
                    }
                ))
                .catch(err => console.log(err));
        };
    }

    formAdd(){
        return (req, resp) => {
            resp.marko(
                require('../views/books/form/form.marko'), { livro: req.body}
            );
        }
    }

    formUpdate(){
        return (req, resp) => {
            const id = req.params.id;
            const bookDao = new BookDao(db);
            bookDao.listId(id)
                .then(book => 
                    resp.marko(
                        require('../views/books/form/form.marko'),
                        {livro : book}
                    )   
                ) 
                .catch(err => console.log(err));
        }
    }

    add(){
        return (req, resp) => {
            console.log(req.body);
            const bookDao = new BookDao(db);
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return resp.marko(
                    require('../views/books/form/form.marko'),
                    {
                        livro: req.body,
                        validateErrors: errors.array()
                    }
                );
            }
    
            bookDao.add(req.body)
                .then(resp.redirect(BookController.routes().list))
                .catch(err => console.log(err));
        }
    }

    update(){
        return (req, resp) => {
            console.log(req.body);
            const bookDao = new BookDao(db);
            bookDao.update(req.body)
                .then(resp.redirect(BookController.routes().list))
                .catch(err => console.log(err));
        }
    }

    exclude(){
        return (req, resp) => {
            const id = req.params.id;
            const bookDao = new BookDao(db);
            bookDao.delete(id)
                .then(() => resp.status(200).end())
                .catch(err => console.log(err));
        }
    }

}

module.exports = BookController;