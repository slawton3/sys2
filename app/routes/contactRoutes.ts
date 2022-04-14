import express, { Router } from 'express';
import ContactController from '../controllers/ContactController';

const router = Router();
const contactController = new ContactController();
router.get('/contacts', contactController.get);

export default router;
