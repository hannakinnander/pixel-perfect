import { SearchItem } from "./SearchItem";
import { searchValues } from "../../../data";
import { IoSearch } from "react-icons/io5";
import { Fragment } from "react/jsx-runtime";

const SearchBar = () => {
  return (
    <div
      className=" group relative flex items-center bg-white 
      shadow-[0px_13px_25px_-4px_rgba(0,0,0,0.1),0px_0px_3px_0px_rgba(8,11,14,0.06)] 
      rounded-full border-[1.5px] border-neutral-200 ml-1"
    >
      {searchValues.map((searchValue, index) => (
        <Fragment key={searchValue.id}>
          <SearchItem searchValue={searchValue} />
          {index !== searchValues.length - 1 && (
            <div className="h-8 w-px bg-neutral-300 self-center group-hover:collapse" />
          )}
        </Fragment>
      ))}
      <div
        className="w-12 h-12 bg-search-btn rounded-full grid place-content-center absolute right-2 cursor-pointer
      "
      >
        <IoSearch className="text-white size-5" />
      </div>
    </div>
  );
};

export default SearchBar;
