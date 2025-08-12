import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Tweet } from "../types/tweet";

export async function getTweets(): Promise<Tweet[]> {
  const { data } = await axios.get(`${BASE_URL}/tweets`);
  return data;
}
