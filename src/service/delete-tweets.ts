import { getIdsToDelete } from "./get-ids-to-delete";
import { tweets } from "./tweets";

export function deleteTweet(id: string) {
  const idsToDelete = new Set(getIdsToDelete(id));
  const newTweets = tweets.filter((tweet) => !idsToDelete.has(tweet.id));
  tweets.splice(0, tweets.length, ...newTweets);
}
