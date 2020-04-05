import { EASY_MODE_WORDS } from "./constants";

export const getNewText = () =>
  EASY_MODE_WORDS[parseInt(Math.random() * EASY_MODE_WORDS.length)];
