import {Router} from 'express';
import * as userCtrl from '../controllers/user.controllers';
import { verifySignup } from '../middlewares';

const router = Router();

router.post('/', verifySignup.existeUsuarioCorreo, userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/:userId', userCtrl.getUserById);
router.put('/:userId', userCtrl.updateUserById);
router.delete('/:userId', userCtrl.deleteUserById);

export default router;