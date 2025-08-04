import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { City } from "../types/city";

export async function getCities(): Promise<City[]> {
  const { data } = await axios.get(`${BASE_URL}/cities`);
  return data;
}
