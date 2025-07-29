import { Event } from "../../types/event";

export interface Props {
  event: Event;
  onCancel: () => void;
  onSubmit: (numTickets: number) => void;
}
