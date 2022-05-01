import makeAudiobook from "../models/Audiobook.js";
import { required } from "../utils/index.js";

export default function makeRemoveAudiobook({ audiobookData }) {
  return async function removeAudiobook(id = required("id")) {
    const existingAudiobook = await audiobookData.getById(id);
    if (!existingAudiobook)
      throw new Error(
        `An audiobook with the id of '${id}' does not exist`,
      );

    const isRemoved = await audiobookData.remove(id);

    if (!isRemoved) throw new Error("Audiobook could not be deleted");

    return makeAudiobook(existingAudiobook);
  };
}
