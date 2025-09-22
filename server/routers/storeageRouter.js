import express from 'express';
import { getDatabaseStats } from '../controllers/storeageController.js';

const storeageRouter = express.Router();

storeageRouter.get('/db-stats', getDatabaseStats);

export default storeageRouter;