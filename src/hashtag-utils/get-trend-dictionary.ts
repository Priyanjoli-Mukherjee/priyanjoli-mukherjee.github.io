import { Dictionary } from "../scrollr/types/dictionary";
import { Tweet } from "../scrollr/types/tweet";
import { getHashtags } from "./get-hashtags";

export function getTrendDictionary(tweets: Array<Tweet>) {
  const trends: Dictionary<number> = {};
  for (let i = 0; i < tweets.length; i++) {
    const hashtags = getHashtags(tweets[i].message);
    for (let j = 0; j < hashtags.length; j++) {
      const key = hashtags[j];
      if (trends[key]) {
        trends[key]++;
      } else {
        trends[key] = 1;
      }
    }
  }
  return trends;
}
