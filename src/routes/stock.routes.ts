import { Router } from 'express';
import { updateStock } from '../controllers/stock.controller';

const router = Router();

router.put('/', updateStock);  // Actualizar el stock cuando se haga una compra.

export default router;