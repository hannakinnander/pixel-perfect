import houseLogo from "./assets/house_logo.jpg";
import balloonLogo from "./assets/balloon_logo.jpg";
import bellLogo from "./assets/bell_logo.jpg";
import type { CategoryType } from "./types";

export const rooms = [
  {
    id: "1",
    title: "Rum",
    location: "Landala",
    date: "17-19 juli",
    host: "Privat värd",
    price: "1 140 SEK",
    rating: "4.79",
    img: "/1.avif",
  },
  {
    id: "2",
    title: "Husbåt",
    location: "Göteborg",
    date: "17-21 juni",
    host: "Privat värd",
    price: "12 353 SEK",
    rating: "4.88",
    img: "/2.avif",
  },
];

export const categories: CategoryType[] = [
  {
    id: "1",
    title: "Boenden",
    logo: houseLogo,
    new: false,
  },
  {
    id: "2",
    title: "Upplevelser",
    logo: balloonLogo,
    new: true,
  },
  {
    id: "3",
    title: "Tjänster",
    logo: bellLogo,
    new: true,
  },
];
