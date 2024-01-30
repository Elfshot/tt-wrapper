import { Router } from "express";
import Data from './data';

const router = Router();

router.get('/', (_req, res) => {
  res.send('users base route');
});

router.use('/data', Data);

export default router;
