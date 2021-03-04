import { Router } from 'express';
import {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from '../controllers/BootcampsController.js';

const router = Router();

router.get('/', getBootcamps);
router.post('/', createBootcamp);
router.get('/:id', getBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);

export default router;
