import { Router } from 'express';
import AuthenticationController from '../controllers/AuthController';
import EstabelecimentoController from '../controllers/EstabelecimentoController';

import multer from "multer"
import multerConfig from "../config/multer"

const upload = multer(multerConfig);

const router = Router();

router.post('/auth/login', AuthenticationController.login);

router.get('/estabelecimentos', EstabelecimentoController.index);
router.post('/estabelecimentos', upload.single("logo"), EstabelecimentoController.create);
router.get('/estabelecimentos/:id', EstabelecimentoController.show);
router.put('/estabelecimentos/:id', upload.single("logo"), EstabelecimentoController.update);
router.delete('/estabelecimentos/:id', EstabelecimentoController.delete);
router.get('/estabelecimentos/localization/:local', EstabelecimentoController.getByLocalization);

export default router;