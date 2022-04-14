// importing dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import consola from 'consola';
import dotenv from 'dotenv';

// bringing in the environment variables
dotenv.config();

// port configuration
const port = Number(process.env.port || 8000);

// configuring express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// importing API routes
import helloRoute from './routes/hello';

app.use('/api/v1/hello', helloRoute);

app.listen(port, () => {
    consola.success({
        message: `Server rolling on ${port} 🚀🚀`,
        badge: false
    })
})