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
  console.log(item.img);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
        }}
        className="h-70 w-70 rounded-4xl"
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
