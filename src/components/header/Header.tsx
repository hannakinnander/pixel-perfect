import logo from "../../assets/airbnb_logo.jpg";
import { categories } from "../../data";
import type { ICategory } from "../../types";
import Category from "./Category";
import { IconBtn } from "../IconBtn";
import { CiGlobe } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./search-bar/SearchBar";

export const Header = () => {
  return (
    <header className="w-full pl-12 pr-12 pt-4 pb-7 bg-zinc-50 flex flex-col items-center gap-5  border-b-3 border-gray-200">
      <div className="w-full flex justify-between items-center ">
        <img src={logo} alt="logo" className="h-fit w-27" />
        <div className="flex gap-8">
          {categories.map((category: ICategory) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#">Bli en värd</a>
          <IconBtn>
            <CiGlobe />
          </IconBtn>
          <IconBtn>
            <FiMenu />
          </IconBtn>
        </div>
      </div>
      <SearchBar />
    </header>
  );
};
