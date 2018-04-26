import { Router } from "express";
import { Repository } from "../common";

const repository = new Repository(require("./competitions.json"));

export default function competitionRouter() {
  const router = Router();
  router.get("/competitions", (req, res) => {
    res.json(repository.getAll());
  });

  router.get("/competitions/:id", (req, res) => {
    const competition = repository.getById(req.param("id"));
    if (competition) res.json(competition);
    else res.status(404).end();
  });
  return router;
}
