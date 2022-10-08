const setupServer = require('./server');
const connectDb = require('../db/config');
const PORT = process.env.PORT || 4000;

const server = setupServer();

(async () => {
  try {
    connectDb();
    server.listen(PORT, () => {
      console.log(`app is listening @ ${PORT}`);
    });
  } catch (err) {
    console.error(`app failed to start ${err}`);
  }
})();


