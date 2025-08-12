import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Tweet } from "../types/tweet";
import { User } from "../types/user";

export async function createTweet(
  message: string,
  user: User,
  replyingTo?: string,
): Promise<Tweet> {
  const tweet = {
    timestamp: Date.now(),
    message,
    replyingTo,
    ...user,
  };

  const { data } = await axios.post(`${BASE_URL}/tweet`, tweet);

  return data;
}
