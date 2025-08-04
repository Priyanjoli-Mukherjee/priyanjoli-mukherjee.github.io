import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Event } from "../types/event";

export async function getEvents(): Promise<Event[]> {
  const { data } = await axios.get(`${BASE_URL}/events`);
  return data;
}
