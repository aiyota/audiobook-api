import makeAudiobook from "../data-access/models/Audiobook.js";
import { required } from "../utils/index.js";

export default function makeGetAudiobookById({ audiobookData }) {
  return async function getAudiobookById(id = required("id")) {
    const audiobookRecord = await audiobookData.getById(id);
    if (!audiobookRecord) return null;

    return makeAudiobook(audiobookRecord);
  };
}
