const express = require('express');
const cors = require('cors');
//importo a variavel que esta sendo exportada no arquivo routes
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
/*
Query Params: Parametros nomeados enviados na rota após ?
ex: /users/pages?page=3
const params = request.query;

Route Params: Parametros utilizados para identificar o recurso
ex: /users/:id
const params = request.params;

Request Body: Corpo da Requisição, utilizado para cirar ou alterar dados (Passa um arquivo JSON)
tem que usar o app.use(express.json())
ex: {"name": "Nome", "idade": 27}
const params = request.body

KNEX.JS
Padroniza todas as query do codigo
npx knex init
*/



app.listen(3333)

