import { useQuery } from "react-query";
import { getUsers } from "../service/get-users";

export function useUsers() {
  const { data: users } = useQuery("users", getUsers);

  return users!;
}
