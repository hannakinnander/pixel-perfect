import type { IHotel, IRoom } from "../../types";
import Card from "./Card";
import CategoryHeading from "./CategoryHeading";

interface IProps {
  text: string;
  items: IRoom[] | IHotel[];
}
const ItemSection = ({ text, items }: IProps) => {
  return (
    <div className="w-fit">
      <CategoryHeading text={text} />
      <div className="flex gap-7">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
