import { Router } from 'express';
import { getAllColor, createColor } from '../controllers/color.controller';

const router = Router();

router.get('/', getAllColor);  // Obtener todos los colores.
router.post('/', createColor);  // Crear un nuevo color.

export default router;