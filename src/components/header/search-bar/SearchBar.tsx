import { SearchItem } from "./SearchItem";
import { searchValues } from "../../../data";
import { BiSearch } from "react-icons/bi";
import { Fragment } from "react/jsx-runtime";

const SearchBar = () => {
  return (
    <div className=" group relative flex items-center bg-white w-fit shadow-xl/5 rounded-full border-[1.2px] border-neutral-200">
      {searchValues.map((searchValue, index) => (
        <Fragment key={searchValue.id}>
          <SearchItem searchValue={searchValue} />
          {index !== searchValues.length - 1 && (
            <div className="h-8 w-0.5 bg-gray-200 self-center group-hover:collapse" />
          )}
        </Fragment>
      ))}
      <div
        className="w-12 h-12 bg-search-btn rounded-full text-center 
      flex items-center justify-center absolute right-2 cursor-pointer
      "
      >
        <BiSearch className="text-white size-5" />
      </div>
    </div>
  );
};

export default SearchBar;

// rounded-full border-2 border-gray-200
