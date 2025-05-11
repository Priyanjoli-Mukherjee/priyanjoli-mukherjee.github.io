import { Ticket } from "./ticket";
import { Venue } from "./venue";

export interface Event {
  id: string;
  artistId: string;
  tickets: Ticket[];
  title: string;
  venue: Venue;
}
