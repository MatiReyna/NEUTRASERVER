import { Router } from 'express';
import productRouter from './product.routes';
import sizeRouter from './size.routes';
import colorRouter from './color.routes';
import stockRouter from './stock.routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/size', sizeRouter);
routes.use('/color', colorRouter);
routes.use('/stock', stockRouter);

export default routes;