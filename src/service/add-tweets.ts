import { randomInteger } from "../random-utils/random-integer";
import { getCurrentUser } from "./get-current-user";
import { tweets } from "./tweets";

export function addTweet(message: string) {
  const user = getCurrentUser();
  tweets.splice(0, 0, {
    id: `${tweets.length}`,
    time: randomInteger(Date.now()),
    message,
    ...user,
  });
}
