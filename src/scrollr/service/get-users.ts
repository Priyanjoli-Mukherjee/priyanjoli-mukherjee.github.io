import cloneDeep from "lodash/cloneDeep";
import { USERS } from "../utils/random-utils/random-user";

export function getUsers() {
  return cloneDeep(USERS);
}
