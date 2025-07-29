import uniq from "lodash/uniq";
import uniqueId from "lodash/uniqueId";

import { range } from "../../utils/array-utils/range";
import { randomInteger } from "../../utils/random-utils/random-integer";
import { randomText } from "../../utils/random-utils/random-text";
import { Tweet } from "../types/tweet";
import { randomHashtag } from "../utils/random-utils/random-hashtag";
import { randomUser } from "../utils/random-utils/random-user";

export function initializeTweets(): Array<Tweet> {
  const tweets = range(25)
    .map(
      (): Tweet => ({
        id: uniqueId("tweet"),
        ...randomUser(),
        time: randomInteger(Date.now()),
        message: `${randomText()} ${uniq(range(randomInteger(5)).map(randomHashtag)).join(" ")}`,
      }),
    )
    .sort((tweet1, tweet2) => tweet2.time - tweet1.time);
  return tweets
    .reverse()
    .map((tweet, index) => ({
      ...tweet,
      replyingTo: Math.random() < 0.5 ? tweets[randomInteger(index)].id : null,
    }))
    .reverse();
}
