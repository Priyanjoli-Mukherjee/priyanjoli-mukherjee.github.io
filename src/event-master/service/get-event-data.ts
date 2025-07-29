import uniqueId from "lodash/uniqueId";

import { Event } from "../types/event";
import { generateTickets } from "./generate-tickets";
import { generateVenues } from "./generate-venues";

const eventData: Event[] = [
  {
    artistId: "taylor-swift",
    title: "Eras Tour",
  },
  {
    artistId: "dublin-philharmonic",
    title: "An Evening With Mozart",
  },
  {
    artistId: "metallica",
    title: "Time Marches On",
  },
  {
    artistId: "daft-punk",
    title: "Interstella 5555",
  },
  {
    artistId: "adele",
    title: "Weekends with Adele",
  },
  {
    artistId: "ed-sheeran",
    title: "Mathematics tour",
  },
  {
    artistId: "mariachi-huenachi",
    title: "Musica de la noche",
  },
  {
    artistId: "bhangra-boys",
    title: "North American Tour",
  },
  {
    artistId: "flamenco-andalusia",
    title: "Torneo de las rosas",
  },
  {
    artistId: "pops-in-the-park",
    title: "John Williams' Greatest Hits",
  },
  {
    artistId: "chris-stapleton",
    title: "All-American Road Show Tour",
  },
  {
    artistId: "hula-gals",
    title: "Songs of my ancestors",
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
  return [...eventData];
}
