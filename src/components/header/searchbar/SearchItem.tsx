import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="pl-7 w-70 pt-4 pb-3 cursor-pointer rounded-full hover:bg-neutral-200">
      <p className="text-xs/3  font-semibold text-gray-800">
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
