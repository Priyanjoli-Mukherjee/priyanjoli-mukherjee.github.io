import { useQuery } from "react-query";

import { getArtists } from "../service/get-artists";

export function useArtists() {
  const { data: artists } = useQuery("artists", getArtists);
  return artists!;
}
