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
        <div className="absolute grid place-items-center top-3 left-3 rounded-full bg-taupe-100/90  pl-2.5 pr-2.5 pt-1 pb-1 shadow-[0px_0px_17px_2px_rgba(149,157,165,0.2)]">
          <p className="text-[0.78em] font-bold text-neutral-600 text-shadow-[0px_0px_5px_5px_rgba(0, 0, 0, 0.7)] ">
            Gästfavorit
          </p>
        </div>
      );
    else return <></>;
  };

  const roomInfo = () => {
    if (item.type === "room")
      return (
        <p className="text-[0.8em]/5 text-neutral-500 tracking-tight">
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
        <p className="text-[0.85em] font-semibold">{item.title}</p>
        {roomInfo()}
        <p className="text-[0.8em]/4 text-neutral-500 text-shadow-2xs/2 ">
          {item.price} <span className="text-neutral-300"> ·</span>
          <span className="text-xs"> ★ </span>
          {item.rating}
        </p>
      </div>
    </div>
  );
};

export default Card;
