import type { IHotel, IRoom } from "../../types";
import Card from "./Card";
import SectionHeading from "./SectionHeading";

interface IProps {
  text: string;
  items: IRoom[] | IHotel[];
}
const ItemSection = ({ text, items }: IProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <SectionHeading text={text} />
      <div className="flex gap-3">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
