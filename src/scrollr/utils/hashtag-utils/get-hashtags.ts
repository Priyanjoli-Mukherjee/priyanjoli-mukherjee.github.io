import uniq from "lodash/uniq";

export function getHashtags(message: string) {
  const regex = /#\w+/gi;
  const matches = message.matchAll(regex);
  return uniq([...matches].map((match) => match[0]));
}
