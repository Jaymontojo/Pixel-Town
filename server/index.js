const setupServer = require('./server');
const PORT = process.env.PORT || 3000;

const server = setupServer();

(async () => {
  try {
    server.listen(PORT, () => {
      console.log(`app is listening @ ${PORT}`);
    });
  } catch (err) {
    console.error(`app failed to start ${err}`);
  }
})();


