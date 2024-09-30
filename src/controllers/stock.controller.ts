import { Request, Response } from 'express';
import Stock from '../models/stock.models';

export const updateStock = async (req: Request, res: Response) => {
    try {
        const { productId, sizeId, colorId, quantity } = req.body;

        const stock = await Stock.findOne({ where: { productId, sizeId, colorId } });

        if (!stock) {
            return res.status(404).json({ error: 'Stock no encontrado' });
        }

        stock.stock = stock.stock - quantity;

        const saveStock = await stock.save();

        return res.status(200).json(saveStock);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el stock' });
    }
};