import { Router } from 'express';
import { getAllSizes, createSize } from '../controllers/size.controller';

const router = Router();

router.get('/', getAllSizes);  // Obtener todos los talles.
router.post('/', createSize);  // Crear un nuevo talle.

export default router;