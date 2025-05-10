import uniqueId from "lodash/uniqueId";
import { Artist } from "../types/artist";
import TaylorSwift from "../../images/event-master/Taylor_Swift.jpg";
import Philharmonic from "../../images/event-master/Philharmonic.jpg";
import Metallica from "../../images/event-master/Metallica.jpg";
import DJ from "../../images/event-master/DJ.jpg";
import Disney from "../../images/event-master/Disney.jpg";
import GriffithObservatory from "../../images/event-master/Griffith_Observatory.jpg";
import MariachiHuenachi from "../../images/event-master/Mariachi_Huenachi.jpg";
import Bhangra from "../../images/event-master/Bhangra.jpg";
import Flamenco from "../../images/event-master/Flamenco.jpg";
import Fireworks from "../../images/event-master/4th_of_July.jpg";
import Rodeo from "../../images/event-master/Rodeo.jpg";
import Polynesian from "../../images/event-master/Polynesian.jpg";

export const artistData: Artist[] = [
  {
    genre: "Pop",
    image: TaylorSwift,
    imageOffset: 10,
    name: "Taylor Swift",
  },
  {
    genre: "Classical",
    image: Philharmonic,
    imageOffset: 30,
    name: "Dublin Philharmonic",
  },
  {
    genre: "Heavy Metal",
    image: Metallica,
    imageOffset: 2,
    name: "Metallica",
  },
  {
    genre: "Electronic",
    image: DJ,
    imageOffset: 20,
    name: "Electric Boogaloo",
  },
  {
    genre: "Film Scores",
    image: Disney,
    imageOffset: 15,
    name: "Magic Music Days",
  },
  {
    genre: "Electronic",
    image: GriffithObservatory,
    imageOffset: 25,
    name: "Bob Moses",
  },
  {
    genre: "Latin",
    image: MariachiHuenachi,
    imageOffset: 10,
    name: "Mariachi Huenachi",
  },
  {
    genre: "Punjabi",
    image: Bhangra,
    imageOffset: 15,
    name: "Bhangra Boys",
  },
  {
    genre: "Latin",
    image: Flamenco,
    imageOffset: 10,
    name: "Flamenco Andalusia",
  },
  {
    genre: "Classical",
    image: Fireworks,
    imageOffset: 10,
    name: "Pops in the Park",
  },
  {
    genre: "Country",
    image: Rodeo,
    imageOffset: 10,
    name: "Garth Brooks",
  },
  {
    genre: "Polynesian",
    image: Polynesian,
    imageOffset: 10,
    name: "The Hula Gals",
  },
].map((artist) => ({
  ...artist,
  description: "",
  id: uniqueId("artist"),
}));

export function getArtistData() {
  return artistData;
}
