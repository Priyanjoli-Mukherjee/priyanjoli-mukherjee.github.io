import { randomInteger } from "./random-integer";

const USERS = [
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
