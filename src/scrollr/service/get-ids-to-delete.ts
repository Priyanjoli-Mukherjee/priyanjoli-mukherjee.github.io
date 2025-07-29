import { tweets } from "./tweets";

function fillIdsToDelete(
  id: string,
  repliesById: Record<string, string[]>,
  ids: string[] = [],
): string[] {
  ids.push(id);
  repliesById[id]?.forEach((tweetId) => {
    fillIdsToDelete(tweetId, repliesById, ids);
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

  return fillIdsToDelete(id, repliesById);
}
