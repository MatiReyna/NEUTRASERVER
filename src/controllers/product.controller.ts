import { Request, Response } from 'express';
import Product from '../models/product.models';

export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price, image } = req.body;

        const newProduct = await Product.create({ name, description, price, image });
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el producto' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        product.name = name;
        product.description = description;
        product.price = price;
        product.image = image;

        const saveProduct = await product.save();

        return res.status(200).json(saveProduct);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        await product.destroy();

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};