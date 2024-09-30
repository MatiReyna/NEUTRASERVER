import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

// <-- Importamos los modelos para su relación -->
import Product from './product.models';
import Size from './size.models';
import Color from './color.models';

class Stock extends Model {
    public productId!: number;
    public sizeId!: number;
    public colorId!: number;
    public stock!: number;
}

Stock.init({
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    sizeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Size,
            key: 'id'
        }
    },
    colorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Color,
            key: 'id'
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, { sequelize, modelName: 'Stock', timestamps: false });

//* <-- Realcionamos los modelos -->
Product.belongsToMany(Size, { through: Stock });  // Un producto puede tener múltiples talles.
Size.belongsToMany(Product, { through: Stock });

Product.belongsToMany(Color, { through: Stock });  // Un producto puede tener múltiples colores.
Color.belongsToMany(Product, { through: Stock });

export default Stock;