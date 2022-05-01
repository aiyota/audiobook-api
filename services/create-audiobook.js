import makeAudiobook from "../models/Audiobook.js";

export default function makeCreateAudiobook({ audiobookData }) {
  return async function createAudiobook({
    title = required("title"),
    author = required("author"),
    coverArtUrl,
    runtime,
  }) {
    if (runtime < 0) throw new Error("'runtime' must be positive");

    const audiobookRecord = await audiobookData.create({
      title,
      author,
      coverArtUrl,
      runtime,
    });

    return makeAudiobook(audiobookRecord);
  };
}
