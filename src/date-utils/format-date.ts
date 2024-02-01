import moment from "moment";

export function formatDate(millis: number) {
  return moment.unix(Math.round(millis / 1000)).format("MM/DD/YYYY");
}
