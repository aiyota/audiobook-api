import makeAudiobook from "../models/Audiobook.js";
import { required } from "../utils/index.js";

export default function makeEditAudiobook({ audiobookData }) {
  return async function editAudiobook({
    id = required("id"),
    title,
    author,
    coverArtUrl,
    runtime,
  }) {
    if (runtime < 0) throw new Error("'runtime' must be positive");

    const existingAudiobook = await audiobookData.getById(id);
    if (!existingAudiobook)
      throw new Error(
        `An audiobook with the id of '${id}' does not exist`,
      );

    const isUpdated = await audiobookData.update({
      id,
      title,
      author,
      coverArtUrl,
      runtime,
    });

    if (!isUpdated) throw new Error("Audiobook did not update");

    const updatedRecord = await audiobookData.getById(id);

    return makeAudiobook(updatedRecord);
  };
}
