import { SearchItem } from "./SearchItem";
import { searchValues } from "../../../data";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative flex items-center bg-white p-2 w-fit rounded-full border-2 border-gray-200 shadow-lg">
      {searchValues.map((searchValue) => (
        <SearchItem key={searchValue.id} searchValue={searchValue} />
      ))}
      <div
        className="w-12 h-12 bg-red-600 rounded-full text-center 
      flex items-center justify-center aboslute
      "
      >
        <FiSearch className="text-white " />
      </div>
    </div>
  );
};

export default SearchBar;
