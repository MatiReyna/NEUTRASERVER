import express from 'express';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.router';

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(cors({
    origin: '*',
    credentials: true,
    methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE' ],
    allowedHeaders: [ 'Origin', 'X-Requested-With', 'Content-Type', 'Accept' ]
}));

server.use('/', routes);

server.use((err: Error, _req:Request, res:Response, _next:NextFunction) => {
    console.error(err.stack);

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    const response = {
        message: 'Algo salió mal!',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
    return res.status(statusCode).json(response);
});

server.use((_req:Request, res:Response) => {
    res.status(404).send('Ruta no encontrada')
});

export default server;