import express from 'express';
const router = express.Router();
import ContactosController from '../controller/contactosController.js'

router.get('/', ContactosController.showForm);
router.post('/add', ContactosController.add);
router.get('/success', ContactosController.showSuccess);

export default router;
