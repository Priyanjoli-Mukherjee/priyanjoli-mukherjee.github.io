import { randomInteger } from "../../utils/random-utils/random-integer";
import { Venue } from "../types/venue";
import { getCities } from "./get-cities";

export function generateVenues() {
  const day = 24 * 60 * 60 * 1000;
  const cities = getCities().sort(() => Math.random() - 0.5);
  let date = new Date().getTime() + randomInteger(day);
  const venues: Venue[] = [];
  for (const city of cities) {
    const location = city.locations[randomInteger(city.locations.length)];
    for (let i = 0; i < 10; i++) {
      date += day;
      venues.push({ cityId: city.id, location, timestamp: date });
    }
    date += randomInteger(day);
  }
  return venues;
}
