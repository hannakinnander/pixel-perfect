import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="mr-13 p-1.5">
      <p className="text-xs/3  font-semibold text-gray-700">
        {searchValue.title}
      </p>
      <input
        type="text"
        placeholder={searchValue.placeholder}
        className="placeholder-gray-600"
      />
    </div>
  );
};
