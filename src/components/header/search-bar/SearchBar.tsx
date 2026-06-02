import { SearchItem } from "./SearchItem";
import { searchValues } from "../../../data";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      {searchValues.map((searchValue) => (
        <SearchItem key={searchValue.id} searchValue={searchValue} />
      ))}
      <button>
        <FiSearch />{" "}
      </button>
    </div>
  );
};

export default SearchBar;
