import ItemSection from "./ItemSection";
import SectionHeading from "./SectionHeading";
import { rooms, hotels } from "../../data";

const Content = () => {
  return (
    <div className="pl-22 pr-22 pt-13 flex flex-col items-center gap-4">
      <SectionHeading text="Populära boenden i Göteborg" />
      <ItemSection items={rooms} />

      <SectionHeading text="Fantastiska hotell för din nästa resa" />
      <ItemSection items={hotels} />
    </div>
  );
};

export default Content;
