import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js';

dotenv.config();

const server = express();
const __dir = import.meta.url
const port = process.env.PORT;

server.set('view engine', 'mustache');
server.set('views', path.join(__dir, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dir, '../public')));
server.use(express.json());

//Rotas
server.use(mainRoutes);
server.use((req, res) => res.send('404 - Página não encontrada. 😥'));

server.listen(port, console.log(`Servidor rodando na porta ${port}.`));