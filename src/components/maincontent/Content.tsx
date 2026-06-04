import ItemSection from "./ItemSection";
import SectionHeading from "./SectionHeading";
import { rooms, hotels } from "../../data";

const Content = () => {
  return (
    <div className="pl-22 pr-22 pt-13 flex flex-col items-center">
      <SectionHeading text="Populära boenden i Göteborg" />
      <ItemSection items={rooms} />

      <SectionHeading text="Fantastiska hotell för din nästa resa" />
      <p className="w-full text-zinc-500 text-[0.97em]/3 text-shadow-2xs">
        Dessutom får du Airbnb-kredit för din vistelse på ett utvalt hotell.
      </p>
      <ItemSection items={hotels} />
    </div>
  );
};

export default Content;
