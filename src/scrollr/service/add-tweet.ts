import uniqueId from "lodash/uniqueId";
import { getCurrentUser } from "./get-current-user";
import { tweets } from "./tweets";

export function addTweet(message: string, replyingTo?: string) {
  const user = getCurrentUser();
  tweets.splice(0, 0, {
    id: uniqueId("tweet"),
    time: Date.now(),
    message,
    replyingTo,
    ...user,
  });
}
