import mongoose from "mongoose";

const AudiobookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  coverArtUrl: {
    type: String,
  },
  runtime: {
    type: Number,
  },
});

export default mongoose.model("Audiobook", AudiobookSchema);
