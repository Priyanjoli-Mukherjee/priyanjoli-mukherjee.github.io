import { randomInteger } from "./random-integer";

export const HASHTAGS = [
  ...new Array(5).fill("#MondayMotivation"),
  ...new Array(4).fill("#LisanAlGaib"),
  ...new Array(7).fill("#WeekendVibes"),
  "#Girls5Eva",
  ...new Array(4).fill("#TechNews"),
  ...new Array(9).fill("#Election2024"),
  ...new Array(4).fill("#FitnessMotivation"),
  ...new Array(6).fill("#Oscars2024"),
  ...new Array(20).fill("#AI"),
  ...new Array(4).fill("#WheresKate"),
];

export function randomHashtag() {
  return HASHTAGS[randomInteger(HASHTAGS.length)];
}
