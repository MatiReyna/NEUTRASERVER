import { Router } from  'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller';

const router = Router();

router.get('/', getAllProducts);  // Obtener todos los productos.
router.get('/:id', getProductById);  // Obtener un producto por ID.
router.post('/', createProduct);  // Crear un nuevo producto.
router.put('/:id', updateProduct);  // Actualizar un producto.
router.delete('/:id', deleteProduct);  // Eliminar un producto.

export default router;