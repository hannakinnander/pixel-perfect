import logo from "../../assets/airbnb_logo.jpg";
import { categories } from "../../data";
import Category from "./Category";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <div>
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              logo={category.logo}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
