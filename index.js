import makeApp from "./app/index.js";
import config from "./config/config.js";
import makeAudiobooksData from "./data-access/audiobooks-data.js";

(async function main() {
  const app = makeApp({ staticRoot: "public" });

  app.configureMiddleware();
  await app.connectToDb();

  app.listen(config.appPort, () => {
    console.log(`app running on port ${config.appPort}`);
  });
})();
