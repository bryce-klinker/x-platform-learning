const detox = require('detox');
const config = require('../package.json').detox;
const { startServer, stopServer } = require('./utilities');

jest.setTimeout(60000);
beforeAll(async () => {
  await startServer(3000);
  await detox.init(config);
});

afterAll(async () => {
  await stopServer();
  await detox.cleanup();
});
