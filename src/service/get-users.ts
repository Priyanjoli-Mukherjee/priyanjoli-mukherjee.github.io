import cloneDeep from "lodash/cloneDeep";
import { USERS } from "../random-utils/random-user";

export function getUsers() {
  return cloneDeep(USERS);
}
