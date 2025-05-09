import { randomInteger } from "../../random-utils/random-integer";
import { Venue } from "../types/venue";

export const venuesByCity: Record<string, string[]> = {
  "Seattle, WA": ["Space Needle", "Pike's Place"],
  "San Francisco, CA": ["Dolores Park", "Golden Gate Park"],
  "Los Angeles, CA": ["Hollywood Bowl", "Griffith Observatory"],
  "New York City, NY": ["Madison Square Garden", "Times Square"],
  "Orlando, FL": ["Disneyworld", "Universal Studios"],
  "Charleston, SC": ["Charleston Music Hall", "The Charleston Pour House"],
  "Austin, TX": ["Mohawk Austin"],
  "Honolulu, HI": ["Blue Note Hawaii", "Waikiki Shell"],
  "Phoenix, AZ": ["PHX Arena", "The Van Buren"],
  "Denver, CO": ["Red Rock Amphitheater"],
  "Boston, MA": ["MGM Music Hall"],
  "Nashville, TN": ["Ryman Auditorium", "Grand Ole Opry"],
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
