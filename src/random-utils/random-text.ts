import { LOREM_IPSUM } from "./lorem-ipsum";
import { randomInteger } from "./random-integer";

export function randomText() {
  const regex = /[A-Z]/g;
  const regexPeriod = /\./g;

  const capitalLetterIndices = LOREM_IPSUM.split("")
    .map((letter, index) => (letter.match(regex) ? index : null))
    .filter((index) => index !== null);

  const i = capitalLetterIndices[randomInteger(capitalLetterIndices.length)];

  const periodIndices = LOREM_IPSUM.slice(i + 1)
    .split("")
    .map((letter, index) => (letter.match(regexPeriod) ? index : null))
    .filter((index) => index !== null);

  const j = periodIndices[randomInteger(periodIndices.length)] + i + 1;

  return LOREM_IPSUM.slice(i, j + 1);
}
