import { Venue } from "./venue";

export interface Event {
  id: string;
  artistId: string;
  price: number;
  title: string;
  venue: Venue;
}
