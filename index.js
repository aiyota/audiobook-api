import makeApp from "./app/index.js";
import config from "./config/config.js";
import {
  deleteAudiobookHandler,
  getAudiobooksHandler,
  patchAudiobookHandler,
  postAudiobookHandler,
} from "./handler/index.js";
import routes from "./routes/index.js";

(async function main() {
  const app = makeApp({ staticRoot: "public" });

  app.configureMiddleware();
  await app.connectToDb();

  app.get(routes.audiobook.get, getAudiobooksHandler);
  app.get(routes.audiobook.getById, getAudiobooksHandler);
  app.post(routes.audiobook.post, postAudiobookHandler);
  app.patch(routes.audiobook.patch, patchAudiobookHandler);
  app.delete(routes.audiobook.delete, deleteAudiobookHandler);

  app.listen(config.appPort, () => {
    console.log(`app running on port ${config.appPort}`);
  });
})();
