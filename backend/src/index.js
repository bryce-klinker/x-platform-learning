import mogran from "morgan";

import playerRouter from "./players/playerRouter";
import competitionRouter from "./competitions/competitionRouter";
import clubRouter from "./clubs/clubRouter";

const express = require("express");
const app = express();
app.use(mogran("tiny"));

app.use(clubRouter());
app.use(competitionRouter());
app.use(playerRouter());
app.get("/", (req, res) => res.send("Hello"));

app.listen(3000, () => console.log("Listening..."));
