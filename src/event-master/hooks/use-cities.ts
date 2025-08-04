import { useQuery } from "react-query";

import { getCities } from "../service/get-cities";

export function useCities() {
  const { data } = useQuery("cities", getCities);
  return data!;
}
