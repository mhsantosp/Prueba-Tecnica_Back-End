import {Router} from 'express'
import * as personsControllers from '../controllers/person.controllers'

const router = Router();

router.post('/', personsControllers.createPerson);
router.get('/', personsControllers.getPersons);
router.get('/:personId', personsControllers.getPersonById);
router.put('/:personId', personsControllers.updatePersonById);
router.delete('/:personId', personsControllers.deletePersonById);

export default router;