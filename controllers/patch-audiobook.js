import results from "../utils/http-results.js";

export default function makePatchAudiobook({ editAudiobook }) {
  return async function postAudiobook(httpRequest) {
    try {
      const audiobook = await editAudiobook({
        id: httpRequest.params.id,
        ...httpRequest.body,
      });

      return audiobook ? results.ok(audiobook) : results.notFound();
    } catch (e) {
      console.error(e);
      return results.badRequest(e);
    }
  };
}
