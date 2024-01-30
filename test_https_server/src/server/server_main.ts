import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
  res.send('server base route');
});

export default router;
