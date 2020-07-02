const express = require('express');
const app = express();

app.listen('3000', () => 
    console.log('Servidor rodando na porta 3000')
);

app.get('/', (req, resp ) =>
    resp.send(`<html> <h1> Hello World! </h1> </html>`)
);

const teste = {nome: 'kewin'}

app.get('/listen', (req, resp)=>{
    resp.send(JSON.stringify(teste))
})