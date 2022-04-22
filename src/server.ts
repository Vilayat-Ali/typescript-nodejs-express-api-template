// importing dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import consola from 'consola';
import dotenv from 'dotenv';

// bringing in the environment variables
dotenv.config();

// port configuration
const port = Number(process.env.port || 8000);

// connection to the database
mongoose.connect(process.env.DB_URI!).then(() => {
    consola.info({
        message: 'Database connection established...',
        badge: false
    })
}).catch((err: any) => {
    consola.error({message: err.message, badge: false})
})

// configuring express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// importing API routes
import accountRoute from "./route/account.route";


// Mapping out the routes here

// authentification route
app.use('/api/account', accountRoute);          


// App listening here
app.listen(port, () => {
    consola.success({
        message: `Server rolling on ${port} 🚀🚀`,
        badge: false
    })
})