import { Artist } from "../types/artist";
import TaylorSwift from "../../images/event-master/artists/Taylor_Swift.jpg";
import Philharmonic from "../../images/event-master/artists/Philharmonic.jpg";
import Metallica from "../../images/event-master/artists/Metallica.jpg";
import Daft_Punk from "../../images/event-master/artists/Daft_Punk.jpg";
import MariachiHuenachi from "../../images/event-master/artists/Mariachi_Huenachi.jpg";
import Bhangra from "../../images/event-master/artists/Bhangra.jpg";
import Flamenco from "../../images/event-master/artists/Flamenco.jpg";
import Fireworks from "../../images/event-master/artists/4th_of_July.jpg";
import ChrisStapleton from "../../images/event-master/artists/Chris_Stapleton.jpg";
import Polynesian from "../../images/event-master/artists/Polynesian.jpg";
import EdSheeran from "../../images/event-master/artists/Ed_Sheeran.jpg";
import Adele from "../../images/event-master/artists/Adele.png";

const artistData: Artist[] = [
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
    genre: "Soul",
    id: "adele",
    image: Adele,
    imageOffset: 5,
    name: "Adele",
  },
  {
    description: "",
    genre: "Pop",
    id: "ed-sheeran",
    image: EdSheeran,
    imageOffset: 5,
    name: "Ed Sheeran",
  },
  {
    description: "",
    genre: "Electronic",
    id: "daft-punk",
    image: Daft_Punk,
    imageOffset: 10,
    name: "Daft Punk",
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
    imageOffset: 20,
    name: "Pops in the Park",
  },
  {
    description: "",
    genre: "Country",
    id: "chris-stapleton",
    image: ChrisStapleton,
    imageOffset: 15,
    name: "Chris Stapleton",
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
  return [...artistData];
}
