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
          className="absolute -top-0.5 left-8 w-9 group-hover:scale-110"
        ></img>
      );
    else return <></>;
  };

  return (
    <div className="group relative flex items-center gap-2.5 h-13.5 mb-px cursor-pointer first:mr-1">
      <div className="h-fit">
        <img src={category.logo} className="group-hover:scale-110" />
        {isNewGategory()}
      </div>

      <p className="text-[0.95em] font-semibold">{category.title}</p>
    </div>
  );
};

export default Category;
//t-auto b-auto l-auto r-auto
