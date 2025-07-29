import { useQuery } from "react-query";
import { getTweets } from "../service/get-tweets";

export function useTweets() {
  const { data: tweets } = useQuery("tweets", getTweets);

  return tweets!;
}
