import { User } from "../../types/user";
import { randomInteger } from "../../../utils/random-utils/random-integer";
import Ethel from "../../images/ethel.jpeg";
import Jimbob from "../../images/jimbob.jpeg";
import Gertrude from "../../images/gertrude.jpeg";

export const USERS: Array<User> = [
  {
    name: "Ethel",
    twitterHandle: "@oldtimerethel",
    image: Ethel,
  },
  {
    name: "JimBob",
    twitterHandle: "@jimbobWW2",
    image: Jimbob,
  },
  {
    name: "Gertrude",
    twitterHandle: "@Gertrude1920",
    image: Gertrude,
  },
];

export function randomUser() {
  return USERS[randomInteger(USERS.length)];
}
