import makeAudiobook from "../data-access/models/Audiobook.js";

export default function makeGetAllAudiobooks({ audiobookData }) {
  return async function getAllAudiobooks() {
    const allAudiobookRecords = await audiobookData.getAll();
    return allAudiobookRecords.map(record => makeAudiobook(record));
  };
}
