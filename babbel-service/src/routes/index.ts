import { Router } from 'express';
import emailRoutes from './emailRoutes';

const router = Router();

router.use('/email', emailRoutes);

export default router;
