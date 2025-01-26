import { tweets } from "./tweets";

export function getIdsToDelete(id: string): string[] {
  const idsToDelete = [id];
  tweets.forEach((tweet) => {
    if (tweet.replyingTo === id) {
      idsToDelete.push(...getIdsToDelete(tweet.id));
    }
  });
  return idsToDelete;
}
