import { Router } from 'express';
import productRouter from './product.router';

const routes = Router();

routes.use('/product', productRouter);

export default routes;