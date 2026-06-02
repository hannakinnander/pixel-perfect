import newLogo from "../../assets/new_category.jpg";
import type { CategoryType } from "../../types";

interface IProps {
  category: CategoryType;
}

const Category = ({ category }: IProps) => {
  const isNewGategory = () => {
    if (category.new) return <img src={newLogo}></img>;
    else return <></>;
  };

  return (
    <div>
      <img src={category.logo}></img>
      <p>{category.title}</p>
      {isNewGategory()}
    </div>
  );
};

export default Category;
