import logo from "../../assets/airbnb_logo.jpg";
import { categories } from "../../data";
import type { ICategory } from "../../types";
import Category from "./Category";
import { IconBtn } from "../IconBtn";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./searchbar/SearchBar";
import { FiGlobe } from "react-icons/fi";

interface IProps {
  changeCategory: (index: number) => void;
  currentCategory: number;
}

export const Header = ({ changeCategory, currentCategory }: IProps) => {
  return (
    <header
      className="w-full pl-11 pr-12 pt-5 pb-8 flex flex-col items-center gap-6 border-b-[2.5px] border-grey-btn bg-header-gray
    shadow-[inset_0px_-36px_35px_-40px_rgba(8,11,14,0.06)]"
    >
      <div className="w-full flex justify-between items-center ">
        <img src={logo} alt="logo" className="h-fit w-27 cursor-pointer mr-2" />
        <div className="flex gap-9 ml-22 items-center">
          {categories.map((category: ICategory, index) => (
            <div
              key={category.id}
              className={
                index === currentCategory
                  ? "border-b-3 border-black text-neutral-700"
                  : "text-neutral-500"
              }
              onClick={() => changeCategory(index)}
            >
              <Category key={category.id} category={category} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="text-[0.95em] text-neutral-800 font-semibold hover:bg-grey-btn pt-2 pb-2 pl-4 pr-4 rounded-full"
          >
            Bli en värd
          </a>
          <IconBtn disabled={false}>
            <FiGlobe className="size-4 m-2" />
          </IconBtn>
          <IconBtn disabled={false}>
            <FiMenu className="size-4 m-2" />
          </IconBtn>
        </div>
      </div>
      <SearchBar />
    </header>
  );
};
