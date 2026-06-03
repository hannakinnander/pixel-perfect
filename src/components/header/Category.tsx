import newLogo from "../../assets/new_category.jpg";
import type { ICategory } from "../../types";

interface IProps {
  category: ICategory;
}

const Category = ({ category }: IProps) => {
  const isNewGategory = () => {
    if (category.new)
      return <img src={newLogo} className=" w-10 absolute top-0 left-10"></img>;
    else return <></>;
  };

  return (
    <div className="relative flex items-center gap-2 h-15 ">
      <img src={category.logo} className=""></img>
      <p className="text-base font-semibold text-neutral-500">
        {category.title}
      </p>
      {isNewGategory()}
      <div className="h-1 bg-black w-full" />
    </div>
  );
};

export default Category;
