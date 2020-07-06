const db = require('../../config/database');
const BookDao = require('../dao/BookDao');
const {check, validationResult} = require('express-validator/check');

module.exports = (app) => {

    app.get('/', (req, resp ) =>
        resp.redirect('/livros')
    );

    app.get('/livros', (req, resp) => {
        const bookDao = new BookDao(db);
        bookDao.list()
            .then(livros => resp.marko(
                require('../views/books/list/list.marko'),
                {
                    livros
                }
            ))
            .catch(err => console.log(err));
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(
            require('../views/books/form/form.marko'), { livro: {}}
        );
    });

    app.get('/livros/form/:id', (req, resp) => {
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
    });

    app.post('/livros', [
        check('titulo').isLength({ min: 5 }).withMessage('O título precisa ter no mínimo 5 caracteres!'),
        check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!')
        ], 
        (req, resp) => {
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
            .then(resp.redirect('/livros'))
            .catch(err => console.log(err));
    });

    app.put('/livros', (req, resp) => {
        console.log(req.body);
        const bookDao = new BookDao(db);
        bookDao.update(req.body)
            .then(resp.redirect('/livros'))
            .catch(err => console.log(err));
    });

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;
        const bookDao = new BookDao(db);
        bookDao.delete(id)
            .then(() => resp.status(200).end())
            .catch(err => console.log(err));
    });
                   
}