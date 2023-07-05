import { Router } from 'express';
import PageController from '../controllers/pageController.js';
import SearchController from '../controllers/searchController.js';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

export default router;