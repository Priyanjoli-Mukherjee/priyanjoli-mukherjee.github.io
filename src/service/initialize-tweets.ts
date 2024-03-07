import uniqueId from "lodash/uniqueId";
import { range } from "../array-utils/range";
import { randomInteger } from "../random-utils/random-integer";
import { randomText } from "../random-utils/random-text";
import { randomUser } from "../random-utils/random-user";
import { Tweet } from "../types/tweet";

export function initializeTweets(): Array<Tweet> {
  return range(15)
    .map(() => ({
      id: uniqueId("tweet"),
      ...randomUser(),
      time: randomInteger(Date.now()),
      message: randomText(),
    }))
    .sort((tweet1, tweet2) => tweet2.time - tweet1.time);
}
