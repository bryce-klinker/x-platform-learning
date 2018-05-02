const express = require('express');
const morgan = require('morgan');
const database = require('./database').default;

const app = express();
app.use(morgan('tiny'));
app.get('/players', (req, res) => res.json(database.players));
app.get('/players/:id', (req, res) =>
  res.json(database.players.find(p => id === req.params.id)),
);

app.get('/competitions', (req, res) => res.json(database.competitions));
app.get('/competitions/:id', (req, res) =>
  res.json(database.competitions.find(p => id === req.params.id)),
);

app.get('/clubs', (req, res) => res.json(database.clubs));
app.get('/clubs/:id', (req, res) =>
  res.json(database.clubs.find(p => id === req.params.id)),
);

let httpServer;
export function startServer(port) {
  if (httpServer) return Promise.resolve();

  return startServerAsync(port);
}

export function stopServer() {
  return new Promise(resolve => httpServer.close(resolve));
}

function startServerAsync(port) {
  return new Promise((resolve, reject) => {
    httpServer = app.listen(port, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}
