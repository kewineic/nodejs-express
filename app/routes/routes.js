module.exports = (app) => {
    app.get('/', (req, resp ) =>
        resp.send(`
            <html>
                <h1> Hello World! </h1> 
            </html>
        `)
    );

    app.get('/second', (req, resp)=>{
        resp.marko(
            require('../views/books/list/list.marko')
        )
    })
}