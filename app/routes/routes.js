const db = require('../../config/database');
const BookDao = require('../dao/BookDao');

module.exports = (app) => {

    app.get('/', (req, resp ) =>
        resp.send(`
            <html>
                <h1> Hello World! </h1> 
            </html>
        `)
    );

    app.get('/livros', (req, resp) => {

        const bookDao = new BookDao(db);
        bookDao.list()
            .then(livros => resp.marko(
                require('../views/books/list/list.marko'),
                {
                    livros: livros
                }
            ))
            .catch(err => console.log(err));
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(
                require('../views/books/form/form.marko')
            );
    });

    app.post('/livros', (req, resp) => {
        console.log(req.body);
        const bookDao = new BookDao(db);
        bookDao.add(req.body)
            .then(resp.redirect('/livros'))
            .catch(err => console.log(err));
    });

}