import { formatDate } from "./format-date";

export function formatTimestamp(timestamp: string) {
  return formatDate(new Date(timestamp).getTime());
}
