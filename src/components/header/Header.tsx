import logo from "../../assets/airbnb_logo.jpg";
import { categories } from "../../data";
import type { CategoryType } from "../../types";
import Category from "./Category";
import { IconBtn } from "./IconBtn";
import { CiGlobe } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <div>
          {categories.map((category: CategoryType) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <div>
          <a href="#">Bli en värd</a>
          <IconBtn>
            <CiGlobe />
          </IconBtn>
          <IconBtn>
            <FiMenu />
          </IconBtn>
        </div>
      </div>
    </header>
  );
};
