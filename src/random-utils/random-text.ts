import { LOREM_IPSUM } from "./lorem-ipsum";
import { randomInteger } from "./random-integer";

export function randomText() {
    const i = randomInteger(LOREM_IPSUM.length);
    const j = randomInteger(LOREM_IPSUM.length);
    return LOREM_IPSUM.slice(Math.min(i, j),Math.max(i, j));
}