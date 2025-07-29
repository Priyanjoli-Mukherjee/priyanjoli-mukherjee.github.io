import cloneDeep from "lodash/cloneDeep";

import { conversations } from "./conversations";

export function getConversations() {
  return cloneDeep(conversations);
}
