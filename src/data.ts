import houseLogo from "./assets/house_logo.jpg";
import balloonLogo from "./assets/balloon_logo.jpg";
import bellLogo from "./assets/bell_logo.jpg";
import type { ICategory, ISearchValue, IRoom, IHotel } from "./types";

export const rooms: IRoom[] = [
  {
    id: "1",
    title: "Rum",
    location: "Landala",
    date: "17-19 juli",
    host: "Privat värd",
    price: "1 140 SEK",
    rating: "4,79",
    img: "/1.avif",
  },
  {
    id: "2",
    title: "Husbåt",
    location: "Göteborg",
    date: "17-21 juni",
    host: "Privat värd",
    price: "12 353 SEK",
    rating: "4,88",
    img: "/2.avif",
  },
  {
    id: "3",
    title: "Lägenhet",
    location: "Göteborg",
    date: "11-13 sep",
    host: "Privat värd",
    price: "3 295 SEK",
    rating: "4,95",
    img: "/3.avif",
  },
  {
    id: "4",
    title: "Båt",
    location: "Nordstaden",
    date: "5-7 juni",
    host: "Privat värd",
    price: "4 325 SEK",
    rating: "4,93",
    img: "/4.avif",
  },
  {
    id: "5",
    title: "Lägenhet",
    location: "Göteborg",
    date: "17-21 juni",
    host: "Privat värd",
    price: "1 765 SEK",
    rating: "5,0",
    img: "/5.avif",
  },
  {
    id: "6",
    title: "Lägenhet",
    location: "Hålltorp",
    date: "2-4 okt",
    host: "Privat värd",
    price: "7 589 SEK",
    rating: "4,88",
    img: "/6.avif",
  },
  {
    id: "7",
    title: "Lägenhet",
    location: "Göteborg",
    date: "19-21 juni",
    host: "Privat värd",
    price: "4 000 SEK",
    rating: "4.86",
    img: "/7.avif",
  },
];

export const hotels: IHotel[] = [
  {
    id: "1",
    hotelName: "Hotel Ronda Lesseps",
    price: "5 525 SEK Totalt",
    rating: "4,78",
    img: "/8.avif",
  },
  {
    id: "2",
    hotelName: "chic&basic Habana Hoose",
    price: "5 947 SEK Totalt",
    rating: "4,8",
    img: "/9.avif",
  },
  {
    id: "3",
    hotelName: "The Moods Oasis",
    price: "4 900 SEK Totalt",
    rating: "4,84",
    img: "/10.avif",
  },
  {
    id: "4",
    hotelName: "Arenas Atiram Hotel",
    price: "5 015 SEK Totalt",
    rating: "4,77",
    img: "/11.avif",
  },
  {
    id: "5",
    hotelName: "Hotel Casa Luz",
    price: "7 406 SEK Totalt",
    rating: "4,78",
    img: "/12.avif",
  },
  {
    id: "6",
    hotelName: "Eco-Boutique Hostal Grau",
    price: "6 798 SEK Totalt",
    rating: "4,84",
    img: "/13.avif",
  },
  {
    id: "7",
    hotelName: "H10 Marina Barcelona",
    price: "7 330 SEK Totalt",
    rating: "5,0",
    img: "/14.avif",
  },
];
export const categories: ICategory[] = [
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

export const searchValues: ISearchValue[] = [
  { id: "1", title: "Var", placeholder: "Sök destinationer" },
  { id: "2", title: "När", placeholder: "Lägg till datum" },
  { id: "3", title: "Vem", placeholder: "Lägg till gäster" },
];
