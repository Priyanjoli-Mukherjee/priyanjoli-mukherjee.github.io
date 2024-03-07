import uniqueId from "lodash/uniqueId";
import { range } from "../array-utils/range";
import { randomText } from "../random-utils/random-text";
import { Message } from "../types/message";
import { User } from "../types/user";
import { getCurrentUser } from "./get-current-user";

export function randomMessages(
  user1: User,
  user2 = getCurrentUser(),
): Array<Message> {
  const now = Date.now();
  return range(10).map((index) => ({
    id: uniqueId("message"),
    message: randomText(),
    twitterHandle:
      Math.random() < 0.5 ? user1.twitterHandle : user2.twitterHandle,
    time: (index * now) / 10,
  }));
}
