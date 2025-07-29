import { Artist } from "../../types/artist";
import { Event } from "../../types/event";

export interface Props {
  artist: Artist;
  event: Event;
  onCancel: () => void;
  onSubmit: () => void;
}
