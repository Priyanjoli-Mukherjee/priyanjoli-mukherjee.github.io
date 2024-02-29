import { range } from "../array-utils/range";
import { randomInteger } from "../random-utils/random-integer";
import { randomText } from "../random-utils/random-text";
import { randomUser } from "../random-utils/random-user";
import { Tweet } from "../types/tweet";

export function initializeTweets(): Array<Tweet> {
  return range(15).map((index) => ({
    id: `tweet${index}`,
    ...randomUser(),
    time: randomInteger(Date.now()),
    message: randomText(),
  }));
}