export class ArgumentRequiredException extends Error {
  constructor(argName) {
    super(`Parameter '${argName}' is required`);
  }
}
