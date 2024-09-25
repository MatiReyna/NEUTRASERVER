import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Product extends Model {}

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
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false  // Comentario
    }
}, { sequelize, modelName: 'Product' });

export default Product;