import { artistData } from "./get-artist-data";
import { Event } from "../types/event";
import uniqueId from "lodash/uniqueId";
import { generateVenues } from "./generate-venues";
import { generateTickets } from "./generate-tickets";

const eventData: Event[] = [
  {
    artistId: artistData[0].id,
    title: "Eras Tour",
  },
]
  .map((event) =>
    generateVenues().map(
      (venue): Event => ({
        ...event,
        id: uniqueId("event"),
        tickets: generateTickets(),
        venue,
      }),
    ),
  )
  .flat();

export function getEventData(): Event[] {
  return eventData;
}
