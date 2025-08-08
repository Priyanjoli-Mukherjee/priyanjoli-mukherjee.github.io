import { Tweet } from "../../types/tweet";
import { getHashtags } from "./get-hashtags";

export function getTrendDictionary(tweets: Array<Tweet>) {
  const trends: Record<string, number> = {};
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
