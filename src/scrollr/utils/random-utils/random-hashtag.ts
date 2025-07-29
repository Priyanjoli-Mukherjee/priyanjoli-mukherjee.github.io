import { randomInteger } from "../../../utils/random-utils/random-integer";

const WEIGHTED_HASTAGS = [
  {
    tag: "MondayMotivation",
    weight: 5,
  },
  {
    tag: "TravelTuesday",
    weight: 4,
  },
  {
    tag: "WeekendVibes",
    weight: 7,
  },
  {
    tag: "WineWednesday",
    weight: 1,
  },
  {
    tag: "TechNews",
    weight: 4,
  },
  {
    tag: "ThrowbackThursday",
    weight: 9,
  },
  {
    tag: "FitnessMotivation",
    weight: 4,
  },
  {
    tag: "FridayVibes",
    weight: 6,
  },
  {
    tag: "AI",
    weight: 20,
  },
  {
    tag: "SundayFunday",
    weight: 4,
  },
  {
    tag: "SillySaturday",
    weight: 2,
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
