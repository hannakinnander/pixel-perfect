import type { IRoom, IHotel } from "../../types";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

interface IProps {
  item: IHotel | IRoom;
}

const Card = ({ item }: IProps) => {
  const isFavorite = () => {
    if (item.favorite)
      return (
        <div className="absolute top-3 left-3 rounded-full bg-taupe-100  pl-3 pr-3 p-[2px] text-[13px] font-bold text-zinc-600">
          Gästfavorit
        </div>
      );
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
    <div className="flex-1 relative">
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-3xl aspect-15/14 "
      >
        {isFavorite()}
        <IoIosHeart className="absolute top-3 right-3 size-7 opacity-60" />
        <IoIosHeartEmpty className="absolute top-3 right-3 size-7 text-white " />
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
