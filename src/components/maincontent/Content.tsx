import ItemSection from "./ItemSection";
import { rooms, hotels } from "../../data";

const Content = () => {
  return (
    <div className="p-10 flex flex-col items-center">
      <ItemSection text="Populära boenden i Göteborg" items={rooms} />
      <ItemSection
        text="Fantastiska hotell för din nästa resa"
        items={hotels}
      />
    </div>
  );
};

export default Content;
