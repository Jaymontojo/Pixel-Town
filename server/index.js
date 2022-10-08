const setupServer = require('./server');
const PORT = process.env.PORT || 3000;

const app = setupServer();

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`app is listening @ ${PORT}`);
    });
  } catch (err) {
    console.error(`app failed to start ${err}`);
  }
})();


