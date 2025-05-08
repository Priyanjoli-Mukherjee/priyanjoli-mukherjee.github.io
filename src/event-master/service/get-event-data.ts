import { randomInteger } from "../../random-utils/random-integer";
import { artistData } from "./get-artist-data";
import { Event } from "../types/event";
import uniqueId from "lodash/uniqueId";
import { generateVenues } from "./generate-venues";

const eventData: Event[] = [
  {
    artistId: artistData[0].id,
    title: "Eras Tour",
  },
].map((event) => ({
  ...event,
  id: uniqueId("event"),
  price: randomInteger(100),
  venues: generateVenues(),
}));

export function getEventData(): Event[] {
  return eventData;
}
