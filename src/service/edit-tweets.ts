import { tweets } from "./tweets";

export function editTweet(id: string, message: string) {
  const index = tweets.findIndex((tweet) => tweet.id === id);
  tweets[index].message = message;
  return tweets;
}
