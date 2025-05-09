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
    name: "Taylor Swift",
  },
  {
    genre: "Classical",
    image: Philharmonic,
    name: "Dublin Philharmonic",
  },
  {
    genre: "Heavy Metal",
    image: Metallica,
    name: "Metallica",
  },
  {
    genre: "Electronic",
    image: DJ,
    name: "Electric Boogaloo",
  },
  {
    genre: "Film Scores",
    image: Disney,
    name: "Magic Music Days",
  },
  {
    genre: "Electronic",
    image: GriffithObservatory,
    name: "Bob Moses",
  },
  {
    genre: "Latin",
    image: MariachiHuenachi,
    name: "Mariachi Huenachi",
  },
  {
    genre: "Punjabi",
    image: Bhangra,
    name: "Bhangra Boys",
  },
  {
    genre: "Latin",
    image: Flamenco,
    name: "Flamenco Andalusia",
  },
  {
    genre: "Classical",
    image: Fireworks,
    name: "Pops in the Park",
  },
  {
    genre: "Country",
    image: Rodeo,
    name: "Garth Brooks",
  },
  {
    genre: "Polynesian",
    image: Polynesian,
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
