import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Artist } from "../types/artist";

export async function getArtists(): Promise<Artist[]> {
  const { data } = await axios.get(`${BASE_URL}/artists`);
  return data;
}
