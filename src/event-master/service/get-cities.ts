import { City } from "../types/city";

const cities: City[] = [
  {
    id: "seattle",
    locations: ["Space Needle", "Pike's Place"],
    name: "Seattle",
    state: "WA",
  },
  {
    id: "san-francisco",
    locations: ["Dolores Park", "Golden Gate Park"],
    name: "San Francisco",
    state: "CA",
  },
  {
    id: "los-angeles",
    locations: ["Hollywood Bowl", "Griffith Observatory"],
    name: "Los Angeles",
    state: "CA",
  },
  {
    id: "new-york",
    locations: ["Madison Square Garden", "Times Square"],
    name: "New York",
    state: "NY",
  },
  {
    id: "orlando",
    locations: ["Disneyworld", "Universal Studios"],
    name: "Orlando",
    state: "FL",
  },
  {
    id: "charleston",
    locations: ["Charleston Music Hall", "The Charleston Pour House"],
    name: "Charleston",
    state: "SC",
  },
  {
    id: "austin",
    locations: ["Mohawk Austin"],
    name: "Austin",
    state: "TX",
  },
  {
    id: "honolulu",
    locations: ["Blue Note Hawaii", "Waikiki Shell"],
    name: "Honolulu",
    state: "HI",
  },
  {
    id: "phoenix",
    locations: ["PHX Arena", "The Van Buren"],
    name: "Phoenix",
    state: "AZ",
  },
  {
    id: "denver",
    locations: ["Red Rock Amphitheater"],
    name: "Denver",
    state: "CO",
  },
  {
    id: "boston",
    locations: ["MGM Music Hall"],
    name: "Boston",
    state: "MA",
  },
  {
    id: "nashville",
    locations: ["Ryman Auditorium", "Grand Ole Opry"],
    name: "Nashville",
    state: "TN",
  },
].sort((city1, city2) => city1.name.localeCompare(city2.name));

export function getCities(): City[] {
  return [...cities];
}
