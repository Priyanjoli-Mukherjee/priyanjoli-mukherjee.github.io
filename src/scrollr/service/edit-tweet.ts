import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Tweet } from "../types/tweet";

export async function editTweet(id: string, tweet: Tweet): Promise<Tweet> {
  const { data } = await axios.put(`${BASE_URL}/tweet/${id}`, tweet);
  return data;
}
