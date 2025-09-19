import express from 'express';
import { getTodos } from '../controllers/controller.js'

const router = express.Router();

router.get('/getTodos', getTodos);

export default router;