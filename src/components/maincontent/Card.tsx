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
        <div className="absolute top-3 left-3 rounded-full bg-taupe-100/90  pl-3 pr-3 pt-1 pb-1 text-[0.78em] font-semibold text-neutral-800 shadow-[0px_0px_17px_2px_rgba(149,157,165,0.2)]">
          Gästfavorit
        </div>
      );
    else return <></>;
  };

  const roomInfo = () => {
    if (item.type === "room")
      return (
        <p className="text-[0.8em]/4 text-neutral-500">
          {item.date} <span className="text-neutral-300">·</span> {item.host}
        </p>
      );
  };

  return (
    <div className="flex-1 relative cursor-pointer min-w-45">
      <div
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-[20px] aspect-20/19 "
      >
        {guestFavorite()}
        <IoIosHeart className="absolute top-3 right-2 w-8 h-7 opacity-60 " />
        <IoIosHeartEmpty className="absolute top-3 right-2 w-8 h-7 text-white cursor-pointer hover:scale-110" />
      </div>
      <div className="p-1">
        <p className="text-sm font-semibold">{item.title}</p>
        {roomInfo()}
        <p className="text-[0.85em]/5 text-neutral-500 text-shadow-2xs/2 ">
          {item.price} <span className="text-neutral-300"> ·</span>
          <span className="text-xs"> ★ </span>
          {item.rating}
        </p>
      </div>
    </div>
  );
};

export default Card;
