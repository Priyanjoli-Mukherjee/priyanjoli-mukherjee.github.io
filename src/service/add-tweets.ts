import { randomInteger } from "../random-utils/random-integer";
import { tweets } from "./tweets";

export function addTweet(message: string) {
    tweets.splice(0, 0, {id: `${tweets.length}`, name:"Priya", twitterHandle: "@Priya", time: randomInteger(Date.now()), message});
}
