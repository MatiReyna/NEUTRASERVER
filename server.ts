import server from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

function startServer() {
    try {
        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        });
    } catch (error) {
        console.error(`Error starting the server on port ${PORT}:`, error);
    }
};

startServer();