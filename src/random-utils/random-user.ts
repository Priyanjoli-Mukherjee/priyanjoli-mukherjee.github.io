import { User } from "../types/user";
import { randomInteger } from "./random-integer";

const USERS: Array<User> = [
  {
    name: "Ethel",
    twitterHandle: "@oldtimerethel",
  },
  {
    name: "JimBob",
    twitterHandle: "@jimbobWW2",
  },
  {
    name: "Gertrude",
    twitterHandle: "@Gertrude1920",
  },
];

export function randomUser() {
  return USERS[randomInteger(USERS.length)];
}
