class BookDao{
    constructor(db) {
        this._db = db;
    }

    add(book){
        return new Promise((resolve, reject) => {
            this._db.run(`
                    INSERT INTO LIVROS (
                        titulo,
                        preco,
                        descricao
                    ) values (?, ?, ?)
                `,
                [
                    book.titulo,
                    book.preco,
                    book.descricao
                ], 
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                } 
            )
        });
    }

    list(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (err, result) => {
                    if(err) {return reject('Nao foi possível listar os livros')}

                    return resolve(result);
                }
            )
        });
    }
}

module.exports = BookDao;

