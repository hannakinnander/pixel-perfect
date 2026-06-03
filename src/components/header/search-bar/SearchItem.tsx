import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="mr-10 p-1">
      <p className="text-xs  font-semibold text-gray-600">
        {searchValue.title}
      </p>
      <input
        type="text"
        placeholder={searchValue.placeholder}
        className="font-medium"
      />
    </div>
  );
};
