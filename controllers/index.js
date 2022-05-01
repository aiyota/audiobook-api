import audiobooksService from "../services/index.js";
import makeDeleteAudiobook from "./delete-audiobook.js";
import makeGetAudiobooks from "./get-audiobook.js";
import makePatchAudiobook from "./patch-audiobook.js";
import makePostAudiobook from "./post-audiobook.js";

const getAudiobooks = makeGetAudiobooks(audiobooksService);
const createAudiobook = makePostAudiobook(audiobooksService);
const patchAudiobook = makePatchAudiobook(audiobooksService);
const deleteAudiobook = makeDeleteAudiobook(audiobooksService);

const audiobooksController = Object.freeze({
  getAudiobooks,
  createAudiobook,
  patchAudiobook,
  deleteAudiobook,
});

export default audiobooksController;
