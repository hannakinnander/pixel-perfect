export interface ICategory {
  id: string;
  title: string;
  logo: string;
  new: boolean;
}

export interface ISearchValue {
  id: string;
  title: string;
  placeholder: string;
}

export interface IRoom {
  id: string;
  type: "room";
  title: string;
  date: string;
  host: string;
  price: string;
  rating: string;
  img: string;
  favorite: boolean;
}

export interface IHotel {
  id: string;
  type: "hotel";
  title: string;
  price: string;
  rating: string;
  img: string;
  favorite: boolean;
}
