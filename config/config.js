import dotenv from "dotenv";
import assert from "assert";

dotenv.config({ path: "./config/config.env" });

const { CONNECTION_STRING, APP_PORT } = process.env;

assert(CONNECTION_STRING, "CONNECTION_STRING is not present in .env file");
assert(APP_PORT, "APP_PORT is not present in .env file");

export default Object.freeze({
  connectionString: CONNECTION_STRING,
  appPort: APP_PORT,
});
