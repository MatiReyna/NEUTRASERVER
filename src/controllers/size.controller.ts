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
        const { size } = req.body;

        if (!size) {
            return res.status(400).json({ error: 'El nombre del talle es requerido' });
        }

        const newSize = await Size.create({ size });
        return res.status(201).json(newSize);
    } catch (error) {
        return res.status(500).json({ error: `Error al crear el talle: ${error.message}` });
    }
};