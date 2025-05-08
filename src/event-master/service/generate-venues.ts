import { randomInteger } from "../../random-utils/random-integer";
import { Venue } from "../types/venue";

const venuesByCity: Record<string, string[]> = {
  Seattle: ["Space Needle", "Pike's Place"],
  "San Francisco": ["Dolores Park", "Golden Gate Park"],
  "Los Angeles": ["Hollywood Bowl", "Griffith Observatory"],
  "New York City": ["Madison Square Garden", "Times Square"],
  Orlando: ["Disneyworld", "Universal Studios"],
  Charleston: ["Charleston Music Hall", "The Charleston Pour House"],
  Austin: ["Mohawk Austin"],
  Honolulu: ["Blue Note Hawaii", "Waikiki Shell"],
  Phoenix: ["PHX Arena", "The Van Buren"],
  Denver: ["Red Rock Amphitheater"],
  Boston: ["MGM Music Hall"],
  Nashville: ["Ryman Auditorium", "Grand Ole Opry"],
};

export function generateVenues() {
  const day = 24 * 60 * 60 * 1000;
  const cities = Object.keys(venuesByCity).sort(() => Math.random() - 0.5);
  let date = new Date().getTime() + randomInteger(day);
  const venues: Venue[] = [];
  for (const city of cities) {
    const locations = venuesByCity[city];
    const location = locations[randomInteger(locations.length)];
    for (let i = 0; i < 10; i++) {
      date += day;
      venues.push({ city, location, timestamp: date });
    }
    date += randomInteger(day);
  }
  return venues;
}
