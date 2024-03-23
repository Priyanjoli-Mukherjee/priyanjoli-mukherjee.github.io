export function parseHashtags(message: string) {
  const regex = /#\w+/gi;
  const matches = message.matchAll(regex);
  const parsed = [];
  let index = 0;
  for (const match of matches) {
    const sliced = message.slice(index, match.index);
    parsed.push(sliced);
    parsed.push(match[0]);
    index = match.index! + match[0].length;
  }
  if (index !== message.length - 1) {
    parsed.push(message.slice(index));
  }
  return parsed;
}
