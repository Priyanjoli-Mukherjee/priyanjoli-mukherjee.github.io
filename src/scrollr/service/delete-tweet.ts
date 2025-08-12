import axios from "axios";

import { BASE_URL } from "../../service/base-url";

export function deleteTweet(id: string): Promise<void> {
  return axios.delete(`${BASE_URL}/tweet/${id}`);
}
