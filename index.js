import makeApp from "./app/index.js";
import config from "./config/config.js";

const app = makeApp({ staticRoot: "public" });

app.configureMiddleware();

app.listen(config.appPort, () => {
  console.log(`app running on port ${config.appPort}`);
});
