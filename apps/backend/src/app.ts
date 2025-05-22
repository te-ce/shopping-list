import express from 'express';
import itemRoutes from '~src/routes/itemRoutes';
import { errorHandler } from '~src/middlewares/errorHandler';
import { dbConnection } from './db';
import cors from 'cors';

dbConnection().catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use('/items', itemRoutes);
app.use(errorHandler);

export default app;
