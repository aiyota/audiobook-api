import results from "../utils/http-results.js";

export default function makeDeleteAudiobook({ removeAudiobook }) {
  return async function deleteAudiobook(httpRequest) {
    try {
      const audiobook = await removeAudiobook(httpRequest.params.id);
      return audiobook ? results.ok(audiobook) : results.notFound();
    } catch (e) {
      console.error(e);
      return results.badRequest(e);
    }
  };
}
