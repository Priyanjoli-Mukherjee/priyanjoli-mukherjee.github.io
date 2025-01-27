import { tweets } from "./tweets";

function getIds(id: string, repliesById: Record<string, string[]>): string[] {
  const ids = [id];
  repliesById[id]?.forEach((tweetId) => {
    ids.push(...getIds(tweetId, repliesById));
  });
  return ids;
}

export function getIdsToDelete(id: string): string[] {
  const repliesById: Record<string, string[]> = {};
  tweets.forEach((tweet) => {
    if (tweet.replyingTo) {
      if (repliesById[tweet.replyingTo]) {
        repliesById[tweet.replyingTo].push(tweet.id);
      } else {
        repliesById[tweet.replyingTo] = [tweet.id];
      }
    }
  });
  return getIds(id, repliesById);
}
