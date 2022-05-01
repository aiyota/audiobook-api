import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import path from "path";
import { fileURLToPath } from "url";
import connectToDb from "../data-access/index.js";
import {
  deleteAudiobookHandler,
  getAudiobooksHandler,
  patchAudiobookHandler,
  postAudiobookHandler,
} from "../handler/index.js";
import routes from "../routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function makeApp({ staticRoot }) {
  const app = express();

  app.configureMiddleware = () =>
    app
      .use(helmet())
      .use(cors())
      .use(express.json())
      .use(hpp())
      .use(xss())
      .use(mongoSanitize())
      .use(express.static(path.join(__dirname, staticRoot)));

  app.configureAudiobookEndpoints = () =>
    app
      .get(routes.audiobook.get, getAudiobooksHandler)
      .get(routes.audiobook.getById, getAudiobooksHandler)
      .post(routes.audiobook.post, postAudiobookHandler)
      .patch(routes.audiobook.patch, patchAudiobookHandler)
      .delete(routes.audiobook.delete, deleteAudiobookHandler);

  app.connectToDb = connectToDb;

  return app;
}
