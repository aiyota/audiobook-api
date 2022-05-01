import makeAudiobooksData from "../data-access/audiobooks-data.js";
import makeCreateAudiobook from "./create-audiobook.js";
import makeEditAudiobook from "./edit-audiobooks.js";
import makeGetAllAudiobooks from "./get-all-audiobooks.js";
import makeGetAudiobookById from "./get-audiobook-by-id.js";
import makeRemoveAudiobook from "./remove-audiobook.js";

const audiobookData = makeAudiobooksData();

const getAllAudiobooks = makeGetAllAudiobooks({ audiobookData });
const getAudiobookById = makeGetAudiobookById({ audiobookData });
const createAudiobook = makeCreateAudiobook({ audiobookData });
const editAudiobook = makeEditAudiobook({ audiobookData });
const removeAudiobook = makeRemoveAudiobook({ audiobookData });

const audiobooksService = Object.freeze({
  getAllAudiobooks,
  getAudiobookById,
  createAudiobook,
  editAudiobook,
  removeAudiobook,
});

export default audiobooksService;
