import { randomInteger } from "../../random-utils/random-integer";
import { Ticket } from "../types/ticket";
import uniqueId from "lodash/uniqueId";

export function generateTickets() {
  const tickets: Ticket[] = [];
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  for (let groupIndex = 0; groupIndex < letters.length; groupIndex++) {
    tickets.push({
      amountAvailable: randomInteger(100),
      id: uniqueId("ticket"),
      price: (letters.length - groupIndex) * 10 + randomInteger(150),
      seatGroup: `Group ${letters[groupIndex]}`,
    });
  }
  return tickets;
}
