import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Size extends Model {
    public id!: number;
    public size!: string;
};

Size.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize, modelName: 'Size', timestamps: false });

export default Size;