import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
  res.send('faction base route');
});

export default router;
