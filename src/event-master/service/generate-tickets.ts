import { randomInteger } from "../../random-utils/random-integer";
import { Ticket } from "../types/ticket";
import uniqueId from "lodash/uniqueId";

export function generateTickets() {
  const tickets: Ticket[] = [];
  const rows = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  for (let row = 0; row < rows.length; row++) {
    for (let seat = 1; seat <= 50; seat++) {
      tickets.push({
        id: uniqueId("ticket"),
        price: (rows.length - row) * 10 + randomInteger(150),
        seat: `${rows[row]}${seat}`,
      });
    }
  }
  return tickets;
}
