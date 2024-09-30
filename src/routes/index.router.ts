import { Router } from 'express';
import productRouter from './product.router';
import sizeRouter from './size.routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/size', sizeRouter);

export default routes;