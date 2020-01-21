const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://lucassa:lucassa@cluster0-1lxmz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);



//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de  parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção )
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB(Não-Relacional)