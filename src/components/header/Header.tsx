import logo from "../../assets/airbnb_logo.jpg";
import { categories } from "../../data";
import type { CategoryType } from "../../types";
import Category from "./Category";

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
      </div>
    </header>
  );
};
