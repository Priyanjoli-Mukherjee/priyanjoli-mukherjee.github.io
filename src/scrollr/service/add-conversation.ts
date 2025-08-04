import uniqueId from "lodash/uniqueId";

import { conversations } from "../service/conversations";
import { USERS } from "../utils/random-utils/random-user";

export function addConversation(twitterHandle: string) {
  const user = USERS.find((u) => u.twitterHandle === twitterHandle);
  if (user) {
    conversations.push({ id: uniqueId("conversation"), messages: [], user });
  }
}
