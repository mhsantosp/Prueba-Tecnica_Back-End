import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controllers';
import { verifySignup } from '../middlewares';

router.post('/signup', verifySignup.existeUsuarioCorreo, authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;