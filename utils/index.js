import { ArgumentRequiredException } from "./exceptions.js";
/**
 * Takes object and returns new object with non-nullish values.
 * In this case nullish means null, undefined
 * @param {object} object
 * @returns {object} object without nullish values
 */
export function toObjectWithValues(object) {
  let outputObject = {};
  for (const [key, value] of Object.entries(object)) {
    const isNotNullish = value !== null && value !== undefined;
    if (isNotNullish) {
      outputObject[key] = value;
    }
  }

  return outputObject;
}

export function required(argName) {
  throw new ArgumentRequiredException(argName);
}
