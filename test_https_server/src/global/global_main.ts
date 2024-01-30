import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
  res.send('global base route');
});

export default router;
