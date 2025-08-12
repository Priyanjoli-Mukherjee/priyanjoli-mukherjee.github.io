import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const { data } = await axios.get(`${BASE_URL}/scrollr-users`);
  return data;
}
