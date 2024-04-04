import { useParams } from "react-router-dom";

export function TweetPage() {
  const { tweetId } = useParams();

  return <div>{tweetId}</div>;
}
