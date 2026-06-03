import type { IRoom, IHotel } from "../../types";
import { PiHeartStraightDuotone } from "react-icons/pi";

interface IProps {
  item: IHotel | IRoom;
}

const Card = ({ item }: IProps) => {
  const isFavorite = () => {
    if (item.favorite) return <div>Gästfavorit</div>;
    else return <></>;
  };

  const showInfo = () => {
    if (item.type === "room")
      return (
        <p>
          {item.date} • {item.host}
        </p>
      );
  };

  return (
    <div className="flex-1">
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
        }}
        className="rounded-4xl aspect-square "
      >
        {isFavorite()}
        <PiHeartStraightDuotone />
      </div>
      <div>
        <p>{item.title}</p>
        {showInfo()}
        <p>
          {item.price}
          <span> ★</span>
          {item.rating}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
