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
    description: "",
    genre: "Pop",
    id: "taylor-swift",
    image: TaylorSwift,
    imageOffset: 15,
    name: "Taylor Swift",
  },
  {
    description: "",
    genre: "Classical",
    id: "dublin-philharmonic",
    image: Philharmonic,
    imageOffset: 30,
    name: "Dublin Philharmonic",
  },
  {
    description: "",
    genre: "Heavy Metal",
    id: "metallica",
    image: Metallica,
    imageOffset: 5,
    name: "Metallica",
  },
  {
    description: "",
    genre: "Electronic",
    id: "electric-boogaloo",
    image: DJ,
    imageOffset: 20,
    name: "Electric Boogaloo",
  },
  {
    description: "",
    genre: "Film Scores",
    id: "magic-music-days",
    image: Disney,
    imageOffset: 15,
    name: "Magic Music Days",
  },
  {
    description: "",
    genre: "Electronic",
    id: "bob-moses",
    image: GriffithObservatory,
    imageOffset: 25,
    name: "Bob Moses",
  },
  {
    description: "",
    genre: "Latin",
    id: "mariachi-huenachi",
    image: MariachiHuenachi,
    imageOffset: 10,
    name: "Mariachi Huenachi",
  },
  {
    description: "",
    genre: "Punjabi",
    id: "bhangra-boys",
    image: Bhangra,
    imageOffset: 15,
    name: "Bhangra Boys",
  },
  {
    description: "",
    genre: "Latin",
    id: "flamenco-andalusia",
    image: Flamenco,
    imageOffset: 10,
    name: "Flamenco Andalusia",
  },
  {
    description: "",
    genre: "Classical",
    id: "pops-in-the-park",
    image: Fireworks,
    imageOffset: 10,
    name: "Pops in the Park",
  },
  {
    description: "",
    genre: "Country",
    id: "garth-brooks",
    image: Rodeo,
    imageOffset: 10,
    name: "Garth Brooks",
  },
  {
    description: "",
    genre: "Polynesian",
    id: "hula-gals",
    image: Polynesian,
    imageOffset: 10,
    name: "The Hula Gals",
  },
];

export function getArtistData() {
  return artistData;
}
