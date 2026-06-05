import { IconBtn } from "../IconBtn";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  text: string;
}
const SectionHeading = ({ text }: IProps) => {
  return (
    <div className="flex justify-between w-full items-center pl-0.5">
      <div className="flex gap-2 items-center">
        <h2 className="text-[1.3em] font-semibold">{text}</h2>
        <a
          href="#"
          className="bg-zinc-100 rounded-full grid place-content-center w-7 h-7 hover:bg-zinc-200"
        >
          <FaArrowRight className="size-3" />
        </a>
      </div>

      <div className="flex h-fit gap-1">
        <IconBtn disabled={true}>
          <IoIosArrowBack className="size-4 m-0.5" />
        </IconBtn>
        <IconBtn disabled={false}>
          <IoIosArrowForward className="size-4 m-0.5" />
        </IconBtn>
      </div>
    </div>
  );
};

export default SectionHeading;
