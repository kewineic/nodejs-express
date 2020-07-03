class BookDao{
    constructor(db) {
        this._db = db;
    }

    list(callback){
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

