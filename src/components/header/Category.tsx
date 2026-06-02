import newLogo from "../../assets/new_category.jpg";
import type { ICategory } from "../../types";

interface IProps {
  category: ICategory;
}

const Category = ({ category }: IProps) => {
  const isNewGategory = () => {
    if (category.new)
      return <img src={newLogo} className="absolute top-0 left-5"></img>;
    else return <></>;
  };

  return (
    <div className="flex items-center gap-1 relative">
      <img src={category.logo}></img>
      <p>{category.title}</p>
      {isNewGategory()}
    </div>
  );
};

export default Category;
