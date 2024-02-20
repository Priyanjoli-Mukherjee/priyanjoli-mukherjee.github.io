import { Tweet } from "../types/tweet";
import { tweets } from "./tweets";

export function addTweet(tweet: Tweet) {
  tweets.push(tweet);
}
