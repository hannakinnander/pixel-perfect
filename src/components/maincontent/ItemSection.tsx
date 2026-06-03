import type { IHotel, IRoom } from "../../types";
import Card from "./Card";

interface IProps {
  items: IRoom[] | IHotel[];
}
const ItemSection = ({ items }: IProps) => {
  return (
    <div className="w-full flex flex-col gap-3 mb-10">
      <div className="flex gap-3">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
