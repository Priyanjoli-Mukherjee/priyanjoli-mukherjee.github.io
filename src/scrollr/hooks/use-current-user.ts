import { useQuery } from "react-query";

import { getCurrentUser } from "../service/get-current-user";

export function useCurrentUser() {
  const { data: currentUser } = useQuery("currentUser", getCurrentUser);

  return currentUser!;
}
