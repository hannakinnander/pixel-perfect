import type { IRoom, IHotel } from "../../types";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

interface IProps {
  item: IHotel | IRoom;
}

const Card = ({ item }: IProps) => {
  const guestFavorite = () => {
    if (item.favorite)
      return (
        <div className="absolute top-3 left-3 rounded-full bg-taupe-100/90  pl-2.5 pr-2.5 pt-0.5 pb-1 text-[0.76em] font-bold text-zinc-600">
          Gästfavorit
        </div>
      );
    else return <></>;
  };

  const roomInfo = () => {
    if (item.type === "room")
      return (
        <p className="text-[0.8em]  text-zinc-500">
          {item.date} • {item.host}
        </p>
      );
  };

  return (
    <div className="flex-1 relative cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-3xl aspect-15/14 "
      >
        {guestFavorite()}
        <IoIosHeart className="absolute top-3 right-3 size-7 opacity-60 " />
        <IoIosHeartEmpty className="absolute top-3 right-3 size-7 text-white cursor-pointer hover:scale-110" />
      </div>
      <div className="p-1">
        <p className="text-sm font-semibold">{item.title}</p>
        {roomInfo()}
        <p className="text-[0.8em]/3 text-zinc-500">
          ${item.price} •<span className="text-zinc-700"> ★ </span>
          {item.rating}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
