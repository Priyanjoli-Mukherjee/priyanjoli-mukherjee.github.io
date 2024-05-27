import { tweets } from "./tweets";

export function deleteTweet(id: string) {
  const index = tweets.findIndex((tweet) => tweet.id === id);
  tweets.splice(index, 1);
}
