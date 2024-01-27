import { range } from "./array-utils/range";
import { randomInteger } from "./random-utils/random-integer";
import { randomText } from "./random-utils/random-text";
import { randomUser } from "./random-utils/random-user";

export function getTweets() {
  return range(10).map((index) => ({
    id: `tweet${index}`,
    ...randomUser(),
    time: randomInteger(Date.now()),
    message: randomText(),
  }));
}
