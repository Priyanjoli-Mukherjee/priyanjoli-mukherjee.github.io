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
  {
    artistId: artistData[1].id,
    title: "An Evening With Mozart",
  },
  {
    artistId: artistData[2].id,
    title: "Time Marches On",
  },
  {
    artistId: artistData[3].id,
    title: "Dance til you drop!",
  },
  {
    artistId: artistData[4].id,
    title: "Star Wars Spectacular",
  },
  {
    artistId: artistData[5].id,
    title: "Live in person",
  },
  {
    artistId: artistData[6].id,
    title: "Musica de la noche",
  },
  {
    artistId: artistData[7].id,
    title: "North American Tour",
  },
  {
    artistId: artistData[8].id,
    title: "Torneo de las rosas",
  },
  {
    artistId: artistData[9].id,
    title: "John Williams' Greatest Hits",
  },
  {
    artistId: artistData[10].id,
    title: "Friends in low places",
  },
  {
    artistId: artistData[11].id,
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
