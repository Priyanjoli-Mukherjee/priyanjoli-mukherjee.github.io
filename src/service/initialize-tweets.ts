import uniq from "lodash/uniq";
import uniqueId from "lodash/uniqueId";
import { range } from "../array-utils/range";
import { randomInteger } from "../random-utils/random-integer";
import { randomText } from "../random-utils/random-text";
import { randomUser } from "../random-utils/random-user";
import { Tweet } from "../types/tweet";
import { randomHashtag } from "../random-utils/random-hashtag";

export function initializeTweets(): Array<Tweet> {
  return range(25)
    .map(
      (): Tweet => ({
        id: uniqueId("tweet"),
        ...randomUser(),
        time: randomInteger(Date.now()),
        message: randomText(),
        hashtags: uniq(range(randomInteger(4)).map(randomHashtag)),
      }),
    )
    .sort((tweet1, tweet2) => tweet2.time - tweet1.time);
}
