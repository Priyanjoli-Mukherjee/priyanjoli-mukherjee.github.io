import { tweets } from "./tweets";

export function editTweet(id: string, message: string) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.message = message;
  }
}
