import server from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

function startServer() {
    try {
        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
};

startServer();