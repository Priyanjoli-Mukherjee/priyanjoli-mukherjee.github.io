import Priya from "../images/priya.jpeg";
import { User } from "../types/user";

export function getCurrentUser(): User {
  return { name: "Priya", twitterHandle: "@Priya", image: Priya };
}
