import express from 'express';
import { MovieController } from './movie.controller';

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getAllMovie);
router.get('/:movieId', MovieController.getSingleMovie);
router.put('/:movieId', MovieController.updateMovie);
router.delete('/:movieId', MovieController.deleteSingleMovie);

export const MovieRouter = router;
