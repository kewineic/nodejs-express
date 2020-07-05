const db = require('../../config/database');
const BookDao = require('../dao/BookDao');

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

    app.post('/livros', (req, resp) => {
        console.log(req.body);
        const bookDao = new BookDao(db);
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