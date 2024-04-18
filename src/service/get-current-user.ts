import { User } from "../types/user";
import Priya from "../images/priya.jpeg";

export function getCurrentUser(): User {
  return { name: "Priya", twitterHandle: "@Priya", image: Priya };
}
