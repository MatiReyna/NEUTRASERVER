import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Product extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public image!: string;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'Product', timestamps: true });

export default Product;