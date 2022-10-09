const setupServer = require('./server');
const connectDb = require('../db/config');
const PORT = process.env.PORT || 4000;

const server = setupServer();

(async () => {
  try {
    connectDb();
    server.listen(PORT, () => {
      console.log(`Server is listening on Port ${PORT}`);
    });
  } catch (err) {
    console.error(`Server failed to start ${err}`);
  }
})();


