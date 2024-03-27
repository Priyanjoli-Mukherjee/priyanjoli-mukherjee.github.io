import { randomInteger } from "./random-integer";

export const HASHTAGS = [
  ...new Array(5).fill("#DonaldTrump"),
  ...new Array(4).fill("#LisanAlGaib"),
  ...new Array(7).fill("#KateMiddletonIsDead"),
  "#Girls5Eva",
  ...new Array(4).fill("#DarkBrandon"),
  ...new Array(9).fill("#Election2024"),
  ...new Array(4).fill("#OscarsSoWhite"),
  ...new Array(6).fill("#BabyJesus"),
  ...new Array(20).fill("#MidgetsForTrump"),
  ...new Array(4).fill("WheresKate"),
];

export function randomHashtag() {
  return HASHTAGS[randomInteger(HASHTAGS.length)];
}
