import { randomInteger } from "./random-integer";

const WEIGHTED_HASTAGS = [
  {
    tag: "MondayMotivation",
    weight: 5,
  },
  {
    tag: "LisanAlGaib",
    weight: 4,
  },
  {
    tag: "WeekendVibes",
    weight: 7,
  },
  {
    tag: "Girls5Eva",
    weight: 1,
  },
  {
    tag: "TechNews",
    weight: 4,
  },
  {
    tag: "Election2024",
    weight: 9,
  },
  {
    tag: "FitnessMotivation",
    weight: 4,
  },
  {
    tag: "Oscars2024",
    weight: 6,
  },
  {
    tag: "AI",
    weight: 20,
  },
  {
    tag: "WheresKate",
    weight: 4,
  },
];

export const HASHTAGS = WEIGHTED_HASTAGS.reduce(
  (tags: string[], { tag, weight }) => [
    ...tags,
    ...new Array(weight).fill(`#${tag}`),
  ],
  [],
);

export function randomHashtag() {
  return HASHTAGS[randomInteger(HASHTAGS.length)];
}
