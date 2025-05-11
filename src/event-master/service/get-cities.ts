import { City } from "../types/city";
import Austin from "../../images/event-master/cities/Austin.jpg";
import Boston from "../../images/event-master/cities/Boston.jpg";
import Charleston from "../../images/event-master/cities/Charleston.jpg";
import Disney from "../../images/event-master/cities/Disney.jpg";
import GoldenGate from "../../images/event-master/cities/Golden_Gate.jpg";
import Kuaui from "../../images/event-master/cities/Kuaui.jpg";
import LosAngeles from "../../images/event-master/cities/Los_Angeles.jpg";
import Nashville from "../../images/event-master/cities/Nashville.jpg";
import RedRocks from "../../images/event-master/cities/Red_Rocks_Amphitheatre.jpg";
import Saguaro from "../../images/event-master/cities/Saguaro.jpg";
import Seattle from "../../images/event-master/cities/Seattle.jpeg";
import StatueOfLiberty from "../../images/event-master/cities/Statue_of_Liberty.jpg";

const cities: City[] = [
  {
    id: "seattle",
    image: Seattle,
    imageOffset: 0,
    locations: ["Space Needle", "Pike's Place"],
    name: "Seattle",
    state: "WA",
  },
  {
    id: "san-francisco",
    image: GoldenGate,
    imageOffset: 0,
    locations: ["Dolores Park", "Golden Gate Park"],
    name: "San Francisco",
    state: "CA",
  },
  {
    id: "los-angeles",
    image: LosAngeles,
    imageOffset: 0,
    locations: ["Hollywood Bowl", "Griffith Observatory"],
    name: "Los Angeles",
    state: "CA",
  },
  {
    id: "new-york",
    image: StatueOfLiberty,
    imageOffset: 0,
    locations: ["Madison Square Garden", "Times Square"],
    name: "New York",
    state: "NY",
  },
  {
    id: "orlando",
    image: Disney,
    imageOffset: 0,
    locations: ["Disneyworld", "Universal Studios"],
    name: "Orlando",
    state: "FL",
  },
  {
    id: "charleston",
    image: Charleston,
    imageOffset: 0,
    locations: ["Charleston Music Hall", "The Charleston Pour House"],
    name: "Charleston",
    state: "SC",
  },
  {
    id: "austin",
    image: Austin,
    imageOffset: 0,
    locations: ["Mohawk Austin"],
    name: "Austin",
    state: "TX",
  },
  {
    id: "honolulu",
    image: Kuaui,
    imageOffset: 0,
    locations: ["Blue Note Hawaii", "Waikiki Shell"],
    name: "Honolulu",
    state: "HI",
  },
  {
    id: "phoenix",
    image: Saguaro,
    imageOffset: 0,
    locations: ["PHX Arena", "The Van Buren"],
    name: "Phoenix",
    state: "AZ",
  },
  {
    id: "denver",
    image: RedRocks,
    imageOffset: 0,
    locations: ["Red Rock Amphitheater"],
    name: "Denver",
    state: "CO",
  },
  {
    id: "boston",
    image: Boston,
    imageOffset: 0,
    locations: ["MGM Music Hall"],
    name: "Boston",
    state: "MA",
  },
  {
    id: "nashville",
    image: Nashville,
    imageOffset: 0,
    locations: ["Ryman Auditorium", "Grand Ole Opry"],
    name: "Nashville",
    state: "TN",
  },
].sort((city1, city2) => city1.name.localeCompare(city2.name));

export function getCities(): City[] {
  return [...cities];
}
