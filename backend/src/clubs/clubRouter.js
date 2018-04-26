import { Router } from "express";
import { Repository } from "../common";

const repository = new Repository(require("./clubs.json"));

export default function competitionRouter() {
  const router = Router();
  router.get("/clubs", (req, res) => {
    res.json(repository.getAll());
  });

  router.get("/clubs/:id", (req, res) => {
    const club = repository.getById(req.param("id"));
    if (club) res.json(club);
    else res.status(404).end();
  });
  return router;
}
