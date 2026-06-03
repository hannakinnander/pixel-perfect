import newLogo from "../../assets/new_category.jpg";
import type { ICategory } from "../../types";

interface IProps {
  category: ICategory;
}

const Category = ({ category }: IProps) => {
  const isNewGategory = () => {
    if (category.new)
      return (
        <img
          src={newLogo}
          className="absolute -top-0 left-8 w-9 group-hover:scale-110"
        ></img>
      );
    else return <></>;
  };

  return (
    <div className="group relative flex items-center gap-3 w-30 h-13 cursor-pointer">
      <div className="  h-fit">
        <img src={category.logo} className="group-hover:scale-110" />
        {isNewGategory()}
      </div>

      <p className=" t-auto b-auto l-auto r-auto text-base font-semibold  z-1000">
        {category.title}
      </p>
    </div>
  );
};

export default Category;
