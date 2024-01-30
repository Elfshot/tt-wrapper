import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 39472;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});