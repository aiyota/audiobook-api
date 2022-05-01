import { toObjectWithValues, required } from "../utils/index.js";
import Audiobook from "./schemas/Audiobook.js";

export default function makeAudiobooksData() {
  return Object.freeze({ getAll, getById, create, update, remove });

  async function getAll() {
    return await Audiobook.find();
  }

  async function getById(id = required("id")) {
    return await Audiobook.findOne({ _id: id });
  }

  async function create({
    title = required("title"),
    author = required("author"),
    coverArtUrl,
    runtime,
  }) {
    const audiobook = new Audiobook({
      title,
      author,
      coverArtUrl,
      runtime,
    });

    return await audiobook.save();
  }

  async function update({
    id = required("id"),
    title,
    author,
    coverArtUrl,
    runtime,
  }) {
    const filter = { _id: id };
    const propsToUpdate = toObjectWithValues({
      title,
      author,
      coverArtUrl,
      runtime,
    });

    const { modifiedCount } = await Audiobook.updateOne(
      filter,
      propsToUpdate,
    );
    return modifiedCount > 0;
  }

  async function remove(id) {
    const { deletedCount } = await Audiobook.deleteOne({ _id: id });
    return deletedCount > 0;
  }
}
