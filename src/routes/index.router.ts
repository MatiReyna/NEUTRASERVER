import { Router } from 'express';
import productRouter from './product.router';
import sizeRouter from './size.routes';
import colorRouter from './color.routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/size', sizeRouter);
routes.use('/color', colorRouter);

export default routes;