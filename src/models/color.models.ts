import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Color extends Model {
    public id!: number;
    public color!: string;
};

Color.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'Color', timestamps: false });

export default Color;