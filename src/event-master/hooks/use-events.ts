import { useQuery } from "react-query";

import { getEvents } from "../service/get-events";

export function useEvents() {
  const { data } = useQuery("events", getEvents);
  return data!;
}
