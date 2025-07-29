import uniqueId from "lodash/uniqueId";
import { range } from "../../array-utils/range";
import { randomText } from "../../random-utils/random-text";
import { Message } from "../types/message";
import { User } from "../types/user";
import { getCurrentUser } from "./get-current-user";
import { randomInteger } from "../../random-utils/random-integer";

export function randomMessages(
  user1: User,
  user2 = getCurrentUser(),
): Array<Message> {
  return range(10)
    .map(() => ({
      id: uniqueId("message"),
      text: randomText(),
      twitterHandle:
        Math.random() < 0.5 ? user1.twitterHandle : user2.twitterHandle,
      time: randomInteger(Date.now()),
    }))
    .sort((message1, message2) => message1.time - message2.time);
}
