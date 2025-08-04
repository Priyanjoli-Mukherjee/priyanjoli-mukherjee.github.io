import uniqueId from "lodash/uniqueId";

import { range } from "../../utils/array-utils/range";
import { randomInteger } from "../../utils/random-utils/random-integer";
import { randomText } from "../../utils/random-utils/random-text";
import { Message } from "../types/message";
import { User } from "../types/user";
import { getCurrentUser } from "./get-current-user";

export function randomMessages(
  user1: User,
  user2 = getCurrentUser(),
): Message[] {
  return range(10)
    .map(
      (): Message => ({
        id: uniqueId("message"),
        text: randomText(),
        twitterHandle:
          Math.random() < 0.5 ? user1.twitterHandle : user2.twitterHandle,
        timestamp: randomInteger(Date.now()),
      }),
    )
    .sort((message1, message2) => message1.timestamp - message2.timestamp);
}
