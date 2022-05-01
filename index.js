import makeApp from "./app/index.js";
import config from "./config/config.js";

(async function main() {
  const app = makeApp({ staticRoot: "public" });

  app.configureMiddleware();
  await app.connectToDb();
  app.configureAudiobookEndpoints();

  app.listen(config.appPort, () => {
    console.log(`app running on port ${config.appPort}`);
  });
})();
