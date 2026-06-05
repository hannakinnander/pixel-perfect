import ItemSection from "./ItemSection";
import SectionHeading from "./SectionHeading";
import { rooms, hotels } from "../../data";

const Content = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-360 p-12">
        <SectionHeading text="Populära boenden i Göteborg" />
        <ItemSection items={rooms} />

        <SectionHeading text="Fantastiska hotell för din nästa resa" />
        <p className="w-full text-neutral-500 text-[0.97em]/5 pl-0.5">
          Dessutom får du Airbnb-kredit för din vistelse på ett utvalt hotell.
        </p>
        <ItemSection items={hotels} />
      </div>
    </div>
  );
};

export default Content;
