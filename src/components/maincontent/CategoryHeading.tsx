import { IconBtn } from "../IconBtn";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  text: string;
}
const CategoryHeading = ({ text }: IProps) => {
  return (
    <div>
      <div>
        <h2>{text}</h2>
        <IconBtn>
          <IoMdArrowForward />
        </IconBtn>
      </div>

      <div>
        <IconBtn>
          <IoIosArrowForward />
        </IconBtn>
        <IconBtn>
          <IoIosArrowForward />
        </IconBtn>
      </div>
    </div>
  );
};

export default CategoryHeading;
