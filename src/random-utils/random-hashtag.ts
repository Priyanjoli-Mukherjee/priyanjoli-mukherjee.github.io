import { randomInteger } from "./random-integer";

export const HASHTAGS = [
  ...new Array(5).fill("DonaldTrump"),
  ...new Array(3).fill("LisanAlGaib"),
  ...new Array(7).fill("KateMiddletonIsDead"),
  "Girls5Eva",
  ...new Array(4).fill("DarkBrandon"),
  ...new Array(9).fill("Election2024"),
  ...new Array(3).fill("OscarsSoWhite"),
];

export function randomHashtag() {
  return HASHTAGS[randomInteger(HASHTAGS.length)];
}
