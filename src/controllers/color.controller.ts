import { Request, Response } from 'express';
import Color from '../models/color.models';

export const getAllColor = async (_req: Request, res: Response) => {
    try {
        const colors = await Color.findAll();
        return res.status(200).json(colors);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los colores' });
    }
};

export const createColor = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const newColor = await Color.create({ name });
        return res.status(201).json(newColor);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el color' });
    }
};