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

    listId(id){
        return new Promise((resolve, reject) => {
            this._db.get(
                'SELECT * FROM livros where id = ?',
                [id],
                (err, result) => {
                    if(err) {return reject('Nao foi possível listar os livros')}

                    return resolve(result);
                }
            )
        });
    }

    update(book){
        return new Promise((resolve, reject) => {
            this._db.run('UPDATE livros SET titulo = ?, preco = ?, descricao = ? WHERE id = ?',
                [
                    book.titulo,
                    book.preco,
                    book.descricao,
                    book.id
                ],
                err => {
                    if (err) {
                        return reject('Não foi possível atualizar o livro!');
                    }

                    resolve();
                }
            );
        });
    }

    delete(id){
        return new Promise((resolve, reject)=>{
            this._db.run('DELETE FROM livros WHERE id = ?',
                [id],
                (err) => {
                    if(err){
                        return reject('Nao foi possível remover o livro')
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = BookDao;

