import { Request, Response } from 'express';
import Size from '../models/size.models';

export const getAllSizes = async (_req: Request, res: Response) => {
    try {
        const sizes = await Size.findAll();
        return res.status(200).json(sizes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los talles' });
    }
};

export const createSize = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const newSize = await Size.create({ name });
        return res.status(201).json(newSize);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el talle' });
    }
};