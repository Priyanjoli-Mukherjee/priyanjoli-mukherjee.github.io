import Fireworks from "../images/artists/4th_of_July.jpg";
import Adele from "../images/artists/Adele.png";
import Bhangra from "../images/artists/Bhangra.jpg";
import ChrisStapleton from "../images/artists/Chris_Stapleton.jpg";
import Daft_Punk from "../images/artists/Daft_Punk.jpg";
import EdSheeran from "../images/artists/Ed_Sheeran.jpg";
import Flamenco from "../images/artists/Flamenco.jpg";
import MariachiHuenachi from "../images/artists/Mariachi_Huenachi.jpg";
import Metallica from "../images/artists/Metallica.jpg";
import Philharmonic from "../images/artists/Philharmonic.jpg";
import Polynesian from "../images/artists/Polynesian.jpg";
import TaylorSwift from "../images/artists/Taylor_Swift.jpg";
import { Artist } from "../types/artist";

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
