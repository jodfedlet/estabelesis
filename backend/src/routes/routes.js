import { Router } from 'express';
import AuthenticationController from '../controllers/AuthController';
import EstabelecimentoController from '../controllers/EstabelecimentoController';

import multer from "multer"
import multerConfig from "../config/multer"

import AuthMiddleware from '../middlewares/AuthMiddleware';

const upload = multer(multerConfig);

const router = Router();

router.post('/auth/login', AuthenticationController.login);

router.get('/estabelecimentos', EstabelecimentoController.index);
router.post('/estabelecimentos', AuthMiddleware, upload.single("logo"), EstabelecimentoController.create);
router.get('/estabelecimentos/:id', AuthMiddleware, EstabelecimentoController.show);
router.put('/estabelecimentos/:id', AuthMiddleware, upload.single("logo"), EstabelecimentoController.update);
router.delete('/estabelecimentos/:id', AuthMiddleware, EstabelecimentoController.delete);
router.get('/estabelecimentos/localization/:local', AuthMiddleware, EstabelecimentoController.getByLocalization);

export default router;