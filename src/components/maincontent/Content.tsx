import ItemSection from "./ItemSection";
import { rooms, hotels } from "../../data";

const Content = () => {
  return (
    <div className="pl-22 pr-22 pt-13 flex flex-col items-center gap-7">
      <ItemSection text="Populära boenden i Göteborg" items={rooms} />
      <ItemSection
        text="Fantastiska hotell för din nästa resa"
        items={hotels}
      />
    </div>
  );
};

export default Content;
