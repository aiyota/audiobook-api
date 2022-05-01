import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import path from "path";
import { fileURLToPath } from "url";
import connectToDb from "../data-access/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function makeConfigureMiddleware(app, staticRoot) {
  return () =>
    app
      .use(helmet())
      .use(cors())
      .use(express.json())
      .use(hpp())
      .use(xss())
      .use(mongoSanitize())
      .use(express.static(path.join(__dirname, staticRoot)));
}

function makeListen(app) {
  return (port, callback) => app.listen(port, callback);
}

export default function makeApp({ staticRoot }) {
  const app = express();

  return Object.freeze({
    configureMiddleware: makeConfigureMiddleware(app, staticRoot),
    listen: makeListen(app),
    connectToDb: connectToDb,
  });
}
