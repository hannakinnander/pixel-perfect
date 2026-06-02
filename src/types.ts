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
  title: string;
  location: string;
  date: string;
  host: string;
  price: string;
  rating: string;
  img: string;
}

export interface IHotel {
  id: string;
  hotelName: string;
  price: string;
  rating: string;
  img: string;
}
