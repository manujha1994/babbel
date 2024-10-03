import express from 'express';
import EmailController from "../controllers/EmailController";

const router = express.Router();
/**
 * POST /derive
 * Derives the email address based on full name and domain.
 */
router.post('/derive', EmailController.deriveEmail);

export default router;
