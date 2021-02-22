import {Router} from 'express'
const router = Router();

import * as taskControllers from '../controllers/task.controllers'

router.get('/', (req, res) => res.json('get tareas'))

export default router;