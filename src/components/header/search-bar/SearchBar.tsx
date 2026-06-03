import { SearchItem } from "./SearchItem";
import { searchValues } from "../../../data";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className=" group relative flex items-center bg-white w-fit shadow-xl/5 rounded-full border-2 border-gray-200">
      {searchValues.map((searchValue, index) => (
        <div
          key={searchValue.id}
          className=" flex p-2 h-full pl-7 rounded-full hover:bg-zinc-200"
        >
          <SearchItem searchValue={searchValue} />
          {index !== searchValues.length - 1 && (
            <div className="h-7 w-px bg-gray-200 self-center group-hover:collapse" />
          )}
        </div>
      ))}
      <div
        className="w-12 h-12 bg-rose-600 rounded-full text-center 
      flex items-center justify-center absolute right-2
      "
      >
        <BiSearch className="text-white size-5" />
      </div>
    </div>
  );
};

export default SearchBar;

// rounded-full border-2 border-gray-200
