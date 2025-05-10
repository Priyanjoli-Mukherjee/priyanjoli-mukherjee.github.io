import { randomInteger } from "../../random-utils/random-integer";
import { Ticket } from "../types/ticket";
import uniqueId from "lodash/uniqueId";

export function generateTickets() {
  const tickets: Ticket[] = [];
  const rows = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  for (let row = 0; row < rows.length; row++) {
    tickets.push({
      amountAvailable: randomInteger(100),
      id: uniqueId("ticket"),
      price: (rows.length - row) * 10 + randomInteger(150),
      seatGroup: `Group ${rows[row]}`,
    });
  }
  return tickets;
}
