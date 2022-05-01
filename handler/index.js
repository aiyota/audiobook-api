import audiobooksController from "../controllers/index.js";
import makeHandler from "./make-handler.js";

export const getAudiobooksHandler = makeHandler(
  audiobooksController.getAudiobooks,
);

export const postAudiobookHandler = makeHandler(
  audiobooksController.createAudiobook,
);

export const patchAudiobookHandler = makeHandler(
  audiobooksController.patchAudiobook,
);

export const deleteAudiobookHandler = makeHandler(
  audiobooksController.deleteAudiobook,
);
