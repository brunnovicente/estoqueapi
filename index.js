import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => res.send('<h1>Api está online!</h1>'))

import produto from './routes/produto.js'
app.use('/produto', produto)

import usuario from './routes/usuario.js'
app.use('/usuario', usuario)

import cliente from './routes/cliente.js'
app.use('/cliente', cliente)

app.listen(port, () => {console.log('Servidor rodando em http://localhost:'+port)})