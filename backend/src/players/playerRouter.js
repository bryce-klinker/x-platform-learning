import { Router } from "express";
import { Repository } from "../common";

const repository = new Repository(require("./players.json"));

export default function playerRouter() {
  const router = Router();
  router.get("/players", (req, res) => {
    res.json(repository.getAll());
  });

  router.get("/players/:id", (req, res) => {
    const player = repository.getById(req.param("id"));
    if (player) {
      res.json(player);
    } else {
      res.status(404).end();
    }
  });
  return router;
}
