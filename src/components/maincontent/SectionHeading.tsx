import { IconBtn } from "../IconBtn";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  text: string;
}
const SectionHeading = ({ text }: IProps) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        <h2 className="text-[22px] font-semibold">{text}</h2>
        <a
          href="#"
          className="bg-zinc-100 rounded-full grid place-content-center w-8 h-8"
        >
          <FaArrowRight className="size-3" />
        </a>
      </div>

      <div className="flex h-fit gap-1">
        <IconBtn padding="2">
          <IoIosArrowBack className="size-3" />
        </IconBtn>
        <IconBtn padding="2">
          <IoIosArrowForward className="size-3" />
        </IconBtn>
      </div>
    </div>
  );
};

export default SectionHeading;
