import { venuesByCity } from "./generate-venues";

export function getCities() {
  return Object.keys(venuesByCity).sort();
}
