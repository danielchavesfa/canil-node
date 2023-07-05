import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js';

dotenv.config();

const server = express();
const __dir = path.resolve();
const port = process.env.PORT;

server.set('view engine', 'mustache');
server.set('views', path.join(__dir, 'src/views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dir, './public')));

//Rotas
server.use(mainRoutes);
server.use((req, res) => res.render('pages/404'));

server.listen(port, console.log(`Servidor rodando na porta ${port}.`));
