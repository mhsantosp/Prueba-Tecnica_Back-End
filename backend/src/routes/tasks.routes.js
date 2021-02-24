import {Router} from 'express'
import * as tasksControllers from '../controllers/tasks.controllers'

const router = Router();

router.post('/', tasksControllers.createTask);
router.get('/', tasksControllers.getTasks);
router.get('/:taskId', tasksControllers.getTaskById);
router.put('/:taskId', tasksControllers.updateTaskById);
router.delete('/:taskId', tasksControllers.deleteTaskById);

export default router;