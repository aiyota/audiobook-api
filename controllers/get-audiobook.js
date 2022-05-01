import { required } from "../utils/index.js";
import results from "../utils/http-results.js";

export default function makeGetAudiobooks({
  getAudiobookById = required("getAudiobookById"),
  getAllAudiobooks = required("getAllAudiobooks"),
}) {
  return async function getAudiobooks(httpRequest) {
    try {
      const { id } = httpRequest.params;
      const result = id
        ? await getAudiobookById(id)
        : await getAllAudiobooks();

      return results.ok(result);
    } catch (e) {
      console.error(e);
      return results.badRequest(e);
    }
  };
}
