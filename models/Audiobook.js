export default function makeAudiobook({
  _id,
  title,
  author,
  coverArtUrl,
  runtime,
}) {
  return Object.freeze({
    id: _id,
    title: title || null,
    author: author || null,
    coverArtUrl: coverArtUrl || null,
    runtime: runtime || null,
  });
}
