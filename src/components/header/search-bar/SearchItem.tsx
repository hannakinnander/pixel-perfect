import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="w-65 pl-7 rounded-full">
      <p className="text-sm font-semibold text-gray-600">{searchValue.title}</p>
      <input type="text" placeholder={searchValue.placeholder} />
    </div>
  );
};
