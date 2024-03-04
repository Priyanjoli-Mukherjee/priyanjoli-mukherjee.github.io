import { User } from "../types/user";

export function getCurrentUser(): User {
  return { name: "Priya", twitterHandle: "@Priya" };
}
