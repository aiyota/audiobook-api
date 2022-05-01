import results from "../utils/http-results.js";

export default function makePostAudiobook({ createAudiobook }) {
  return async function postAudiobook(httpRequest) {
    try {
      const audiobook = await createAudiobook(httpRequest.body);

      return results.created(audiobook);
    } catch (e) {
      console.error(e);
      return results.badRequest(e);
    }
  };
}
