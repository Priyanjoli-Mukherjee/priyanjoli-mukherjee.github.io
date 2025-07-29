import { City } from "../../types/city";
import { Event } from "../../types/event";

export interface Props {
  artistName: string;
  city: City;
  event: Event;
  isLastCard: boolean;
  onSelectEvent: (evt: Event) => void;
}
