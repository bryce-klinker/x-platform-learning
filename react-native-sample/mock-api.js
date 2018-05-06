require('babel-register');
const { startServer } = require('./e2e/utilities');

startServer(3000).then(() =>
  console.log('Listening at http://localhost:3000...'),
);
