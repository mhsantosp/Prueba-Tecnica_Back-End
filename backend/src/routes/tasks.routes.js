import {Router} from 'express';
import * as tasksControllers from '../controllers/tasks.controllers';
import {verifyToken} from '../middlewares';

const router = Router();


router.post('/', verifyToken.verifyToken, tasksControllers.createTask);
router.get('/', tasksControllers.getTasks);
router.get('/:taskId', tasksControllers.getTaskById);
router.put('/:taskId', verifyToken.verifyToken, tasksControllers.updateTaskById);
router.delete('/:taskId', verifyToken.verifyToken, tasksControllers.deleteTaskById);

export default router;