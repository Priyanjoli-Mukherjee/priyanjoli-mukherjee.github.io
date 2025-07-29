import cloneDeep from "lodash/cloneDeep";

import { tweets } from "./tweets";

export function getTweets() {
  return cloneDeep(tweets);
}
