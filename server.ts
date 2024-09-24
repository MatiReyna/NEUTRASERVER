import server from './src/app';
import dotenv from 'dotenv';
import sequelize from './src/db';

// <-- Importamos los modelos -->
import './src/models/product.models';

dotenv.config();

const PORT = process.env.PORT || 3001;

async function startServer() {
    try {
        await sequelize.sync({ force: false });
        console.log('Database synced successfully');

        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        });
    } catch (error) {
        console.error(`Error starting the server on port ${PORT}:`, error);
    }
};

startServer();